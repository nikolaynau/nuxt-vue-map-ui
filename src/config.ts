import type { ModuleOptions } from './types';

export const libraryName = 'vue-map-ui';
export const runtimeDir = './runtime';

const allComponents = [
  'VMapAttributionControl',
  'VMapControlPosition',
  'VMapLayersControl',
  'VMapScaleControl',
  'VMapZoomControl',
  'VMap',
  'VMapPane',
  'VMapArcGisAeroTileLayer',
  'VMapArcGisTileLayer',
  'VMapGoogleTileLayer',
  'VMapMapboxTileLayer',
  'VMapOpenTransportTileLayer',
  'VMapOsmTileLayer',
  'VMapDefaultIcon',
  'VMapDivIcon',
  'VMapDivMarker',
  'VMapIcon',
  'VMapIconMarker',
  'VMapMarker',
  'VMapPinIcon',
  'VMapPinMarker',
  'VMapTileLayer'
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
  'useControlPosition'
];

export const defaults: ModuleOptions = {
  components: allComponents,
  imports: allImports,
  autoImports: true,
  leafletStyle: true,
  libraryStyle: true,
  themeStyle: true,
  normalizeStyle: true
};
