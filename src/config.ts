import type { ModuleOptions, PresetImport } from './types';

export const libraryName = 'vue-map-ui';

const allComponents = ['VMap', 'VMapTileLayer', 'VMapOsmTileLayer'];

const allImports: PresetImport[] = ['useMap', 'useLayer'];

export const defaults: ModuleOptions = {
  components: allComponents,
  imports: allImports,
  autoImports: true,
  leafletStyles: true,
  libraryStyles: true,
  normalizeStyles: true
};
