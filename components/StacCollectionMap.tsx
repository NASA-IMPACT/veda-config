import React, { useState, useEffect, useMemo } from 'react';
// @ts-ignore
import Map, { Source, Layer, NavigationControl } from '$veda-ui/react-map-gl';
import '$veda-ui/mapbox-gl/dist/mapbox-gl.css';

const hideMapboxBranding = `
  .stac-collection-map .mapboxgl-ctrl-logo,
  .stac-collection-map .mapboxgl-ctrl-attrib {
    display: none !important;
  }
`;

interface StacCollection {
  id: string;
  extent: {
    spatial: {
      bbox: number[][];
    };
    temporal?: {
      interval: (string | null)[][];
    };
  };
  title?: string;
  description?: string;
  renders?: {
    dashboard?: Record<string, unknown>;
    [key: string]: Record<string, unknown> | undefined;
  };
}

interface StacItem {
  id: string;
  bbox: number[];
  properties: {
    datetime?: string;
  };
  assets?: Record<string, { href: string }>;
}

interface StacCollectionMapProps {
  collectionId: string;
  stacUrl: string;
  tilerUrl: string;
  mapboxToken?: string;
  width?: string | number;
  height?: string | number;
  fillColor?: string;
  fillOpacity?: number;
  strokeColor?: string;
  strokeWidth?: number;
  tileFormat?: string;
  tileMatrixSetId?: string;
  renderKey?: string;
}

export default function StacCollectionMap({
  collectionId,
  stacUrl,
  tilerUrl,
  mapboxToken = process.env.MAPBOX_TOKEN,
  width = '100%',
  height = 400,
  fillColor = '#e57373',
  fillOpacity = 0.3,
  strokeColor = '#c62828',
  strokeWidth = 2,
  tileFormat = 'png',
  tileMatrixSetId = 'WebMercatorQuad',
  renderKey = 'dashboard',
}: StacCollectionMapProps) {
  const [collection, setCollection] = useState<StacCollection | null>(null);
  const [firstItem, setFirstItem] = useState<StacItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        const baseStacUrl = stacUrl.replace(/\/$/, '');

        // Fetch collection metadata
        const collectionUrl = `${baseStacUrl}/collections/${collectionId}`;
        console.log('Fetching STAC collection from:', collectionUrl);

        const collectionResponse = await fetch(collectionUrl);
        if (!collectionResponse.ok) {
          throw new Error(`Failed to fetch collection: ${collectionResponse.status} ${collectionResponse.statusText}`);
        }
        const collectionData = await collectionResponse.json();
        setCollection(collectionData);

        // Fetch first item from the collection
        const itemsUrl = `${baseStacUrl}/collections/${collectionId}/items?limit=1`;
        console.log('Fetching first item from:', itemsUrl);

        const itemsResponse = await fetch(itemsUrl);
        if (!itemsResponse.ok) {
          throw new Error(`Failed to fetch items: ${itemsResponse.status} ${itemsResponse.statusText}`);
        }
        const itemsData = await itemsResponse.json();

        if (itemsData.features && itemsData.features.length > 0) {
          setFirstItem(itemsData.features[0]);
          console.log('First item:', itemsData.features[0].id);
        }
      } catch (err) {
        console.error('STAC fetch error:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch data');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [collectionId, stacUrl]);

  // Get render params from collection's renders.dashboard (or specified renderKey)
  const renderParams = useMemo(() => {
    if (!collection?.renders?.[renderKey]) return {};
    return collection.renders[renderKey];
  }, [collection, renderKey]);

  // Build tile URL for the first item
  const tileUrl = useMemo(() => {
    if (!firstItem || !collection) return null;

    const baseTilerUrl = tilerUrl.replace(/\/$/, '');
    // /collections/{collection_id}/items/{item_id}/tiles/{tileMatrixSetId}/{z}/{x}/{y}.{format}
    let url = `${baseTilerUrl}/collections/${collectionId}/items/${firstItem.id}/tiles/${tileMatrixSetId}/{z}/{x}/{y}.${tileFormat}`;

    // Add render params from collection's renders.dashboard as query string
    const params = new URLSearchParams();
    Object.entries(renderParams).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        // Handle arrays (e.g., rescale: [0, 100])
        if (Array.isArray(value)) {
          params.append(key, value.join(','));
        } else if (typeof value === 'object') {
          // Handle objects (e.g., colormap) - stringify them
          params.append(key, JSON.stringify(value));
        } else {
          params.append(key, String(value));
        }
      }
    });
    const queryString = params.toString();
    if (queryString) {
      url += `?${queryString}`;
    }

    console.log('Tile URL template:', url);
    console.log('Render params from collection:', renderParams);
    return url;
  }, [firstItem, collection, collectionId, tilerUrl, tileMatrixSetId, tileFormat, renderParams]);

  // Create GeoJSON polygon from bbox
  const bboxGeoJson = useMemo(() => {
    if (!collection?.extent?.spatial?.bbox?.[0]) return null;

    const [west, south, east, north] = collection.extent.spatial.bbox[0];

    return {
      type: 'Feature' as const,
      properties: {
        id: collection.id,
        title: collection.title || collection.id,
      },
      geometry: {
        type: 'Polygon' as const,
        coordinates: [
          [
            [west, south],
            [east, south],
            [east, north],
            [west, north],
            [west, south],
          ],
        ],
      },
    };
  }, [collection]);

  // Calculate initial view state to fit the bbox
  const initialViewState = useMemo(() => {
    if (!collection?.extent?.spatial?.bbox?.[0]) {
      return {
        longitude: 0,
        latitude: 0,
        zoom: 1,
      };
    }

    const [west, south, east, north] = collection.extent.spatial.bbox[0];
    const centerLon = (west + east) / 2;
    const centerLat = (south + north) / 2;

    // Calculate zoom level based on bbox size
    const lonDiff = Math.abs(east - west);
    const latDiff = Math.abs(north - south);
    const maxDiff = Math.max(lonDiff, latDiff);

    let zoom = 1;
    if (maxDiff < 1) zoom = 8;
    else if (maxDiff < 5) zoom = 6;
    else if (maxDiff < 10) zoom = 5;
    else if (maxDiff < 30) zoom = 4;
    else if (maxDiff < 60) zoom = 3;
    else if (maxDiff < 120) zoom = 2;

    return {
      longitude: centerLon,
      latitude: centerLat,
      zoom,
    };
  }, [collection]);

  if (loading) {
    return (
      <div
        style={{
          width,
          maxWidth: 500,
          height,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f5f5f5',
          border: '1px solid #ddd',
          borderRadius: 4,
        }}
      >
        Loading collection...
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          width,
          maxWidth: 500,
          height,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff5f5',
          border: '1px solid #ffcdd2',
          borderRadius: 4,
          color: '#c62828',
          padding: 16,
        }}
      >
        Error: {error}
      </div>
    );
  }

  if (!mapboxToken) {
    return (
      <div
        style={{
          width,
          maxWidth: 500,
          height,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff5f5',
          border: '1px solid #ffcdd2',
          borderRadius: 4,
          color: '#c62828',
          padding: 16,
        }}
      >
        Mapbox token is required
      </div>
    );
  }

  return (
    <div
      className="stac-collection-map"
      style={{
        width,
        maxWidth: 500,
        height,
        position: 'relative',
        border: '1px solid #ddd',
        borderRadius: 4,
        overflow: 'hidden',
      }}
    >
      <style>{hideMapboxBranding}</style>
      {/* @ts-ignore */}
      <Map
        initialViewState={initialViewState}
        style={{ width: '100%', height: '100%' }}
        mapStyle="mapbox://styles/mapbox/light-v11"
        mapboxAccessToken={mapboxToken}
        attributionControl={false}
        mapboxLogo={false}
      >
        <NavigationControl position="top-left" />

        {/* Raster tile layer from titiler */}
        {tileUrl && (
          <Source
            id="raster-tiles"
            type="raster"
            tiles={[tileUrl]}
            tileSize={256}
          >
            <Layer
              id="raster-layer"
              type="raster"
              paint={{
                'raster-opacity': 1,
              }}
            />
          </Source>
        )}

        {/* Bbox outline */}
        {bboxGeoJson && (
          <Source id="bbox-source" type="geojson" data={bboxGeoJson}>
            <Layer
              id="bbox-fill"
              type="fill"
              paint={{
                'fill-color': fillColor,
                'fill-opacity': fillOpacity,
              }}
            />
            <Layer
              id="bbox-outline"
              type="line"
              paint={{
                'line-color': strokeColor,
                'line-width': strokeWidth,
              }}
            />
          </Source>
        )}
      </Map>

      {/* Info overlay */}
      {collection && (
        <div
          style={{
            position: 'absolute',
            bottom: 8,
            left: 8,
            right: 8,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '8px 12px',
            borderRadius: 4,
            fontSize: 12,
          }}
        >
          <strong>{collection.title || collection.id}</strong>
          {firstItem && (
            <div style={{ marginTop: 4, color: '#666' }}>
              Item: {firstItem.id}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
