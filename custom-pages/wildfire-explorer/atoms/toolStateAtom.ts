// @ts-ignore
import { atomWithUrlValueStability } from '$veda-ui-scripts/utils/params-location-atom/atom-with-url-value-stability';

export const toolStateAtom = atomWithUrlValueStability<any>({
  initialValue: {
    selectedEventId: null,
    windLayerType: null,
    show3DMap: false,
    showPerimeterNrt: true,
    showFireline: false,
    showNewFirepix: false,
    viewMode: 'explorer',
    timeRange: {
      start: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
      end: new Date()
    },
    layerOpacity: 100,
    viewState: {
      longitude: -95.7129,
      latitude: 37.0902,
      zoom: 3,
      pitch: 0,
      bearing: 0,
      padding: {
        top: undefined,
        bottom: undefined,
        left: undefined,
        right: undefined,
      },
    },
  },
  urlParam: 'fireEventExplorer',
  hydrate: (serialized: string): any => {
    try {
      const parsed = JSON.parse(serialized);
      return {
        ...parsed,
        timeRange: {
          start: new Date(parsed.timeRange?.start || Date.now() - 30 * 24 * 60 * 60 * 1000),
          end: new Date(parsed.timeRange?.end || Date.now())
        },
        viewState: {
          longitude: parsed.viewState?.longitude ?? -95.7129,
          latitude: parsed.viewState?.latitude ?? 37.0902,
          zoom: parsed.viewState?.zoom ?? 3,
          pitch: parsed.viewState?.pitch ?? 0,
          bearing: parsed.viewState?.bearing ?? 0,
          padding: {
            top: parsed.viewState?.padding?.top ?? undefined,
            bottom: parsed.viewState?.padding?.bottom ?? undefined,
            left: parsed.viewState?.padding?.left ?? undefined,
            right: parsed.viewState?.padding?.right ?? undefined,
          },
        },
      };
    } catch (error) {
      console.warn('Failed to parse tool state from URL:', error);
      return {
        selectedEventId: null,
        windLayerType: null,
        show3DMap: false,
        showPerimeterNrt: true,
        showFireline: false,
        showNewFirepix: false,
        viewMode: 'explorer',
        timeRange: {
          start: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
          end: new Date()
        },
        layerOpacity: 100,
        viewState: {
          longitude: -95.7129,
          latitude: 37.0902,
          zoom: 3,
          pitch: 0,
          bearing: 0,
          padding: {
            top: undefined,
            bottom: undefined,
            left: undefined,
            right: undefined,
          },
        },
      };
    }
  },
  dehydrate: (value: any): string => {
    try {
      const serializable = {
        ...value,
        timeRange: {
          start: value.timeRange.start.toISOString(),
          end: value.timeRange.end.toISOString()
        },
        viewState: {
          longitude: value.viewState?.longitude,
          latitude: value.viewState?.latitude,
          zoom: value.viewState?.zoom,
          pitch: value.viewState?.pitch,
          bearing: value.viewState?.bearing,
          padding: value.viewState?.padding,
        },
      };

      return JSON.stringify(serializable);
    } catch (error) {
      console.warn('Failed to serialize tool state:', error);
      return '';
    }
  }
});