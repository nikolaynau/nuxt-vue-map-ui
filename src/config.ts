import type { ModuleOptions } from './types';

export const libraryName = 'vue-map-ui';
export const runtimeDir = './runtime';

const allComponents = [
  'VMap',
  'VMapTileLayer',
  'VMapAttributionControl',
  'VMapLayersControl',
  'VMapScaleControl',
  'VMapZoomControl',
  'VMapArcGisAeroTileLayer',
  'VMapArcGisTileLayer',
  'VMapGoogleTileLayer',
  'VMapMapboxTileLayer',
  'VMapOpenTransportTileLayer',
  'VMapOsmTileLayer'
];
const allImports: string[] = [
  'useMap',
  'useTileLayer',
  'useAttributionControl',
  'useLayersControl',
  'useScaleControl',
  'useZoomControl'
];

export const defaults: ModuleOptions = {
  components: allComponents,
  imports: allImports,
  autoImports: true,
  leafletStyle: true,
  libraryStyle: true,
  normalizeStyle: true
};
