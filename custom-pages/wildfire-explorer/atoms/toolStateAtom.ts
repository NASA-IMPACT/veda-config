// @ts-ignore
import { atomWithUrlValueStability } from '$veda-ui-scripts/utils/params-location-atom/atom-with-url-value-stability';

const defaultToolState = {
  selectedEventId: null,
  windLayerType: null,
  show3DMap: false,
  showPerimeterNrt: true,
  showFireline: false,
  showNewFirepix: false,
  viewMode: 'explorer',
  timeRange: {
    start: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000),
    end: new Date(),
  },
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

export const toolStateAtom = atomWithUrlValueStability<any>({
  initialValue: defaultToolState,
  urlParam: 'fireEventExplorer',
  hydrate: (serialized: string): any => {
    try {
      const parsed = JSON.parse(serialized);
      return {
        ...parsed,
        timeRange: {
          start: new Date(parsed.timeRange?.start || defaultToolState.timeRange.start),
          end: new Date(parsed.timeRange?.end || defaultToolState.timeRange.end),
        },
        viewState: {
          longitude: parsed.viewState?.longitude ?? defaultToolState.viewState.longitude,
          latitude: parsed.viewState?.latitude ?? defaultToolState.viewState.latitude,
          zoom: parsed.viewState?.zoom ?? defaultToolState.viewState.zoom,
          pitch: parsed.viewState?.pitch ?? defaultToolState.viewState.pitch,
          bearing: parsed.viewState?.bearing ?? defaultToolState.viewState.bearing,
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
      return defaultToolState;
    }
  },
  dehydrate: (value: any): string => {
    try {
      const serializable = {
        ...value,
        timeRange: {
          start: value.timeRange.start.toISOString(),
          end: value.timeRange.end.toISOString(),
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
  },
});
