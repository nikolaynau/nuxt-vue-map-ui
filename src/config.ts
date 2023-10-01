import type { ModuleOptions } from './types';

export const libraryName = 'vue-map-ui';
export const runtimeDir = './runtime';

const allComponents = [
  'VMapAttributionControl',
  'VMapControlPosition',
  'VMapLayersControl',
  'VMapLocateControl',
  'VMapScaleControl',
  'VMapZoomControl',
  'VMapDefaultIcon',
  'VMapDivIcon',
  'VMapDivMarker',
  'VMapIcon',
  'VMapIconMarker',
  'VMapMarker',
  'VMapPinIcon',
  'VMapPinMarker',
  'VMapTileLayer',
  'VMap',
  'VMapPane',
  'VMapArcGisAeroTileLayer',
  'VMapArcGisTileLayer',
  'VMapGoogleTileLayer',
  'VMapMapboxTileLayer',
  'VMapOpenTransportTileLayer',
  'VMapOsmTileLayer'
];

const allImports: string[] = [
  'useMap',
  'usePane',
  'useTileLayer',
  'useMarker',
  'useIcon',
  'useDivIcon',
  'useAttributionControl',
  'useLayersControl',
  'useScaleControl',
  'useZoomControl',
  'useControlPosition',
  'useLocateControl'
];

export const defaults: ModuleOptions = {
  components: allComponents,
  imports: allImports,
  autoImports: true,
  styles: true
};
