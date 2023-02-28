import type { Options, PresetImport } from './types';

export const libraryName = 'vue-map-ui';

const allComponents = ['VMap', 'VMapTileLayer', 'VMapOsmTileLayer'];

const allImports: PresetImport[] = ['useMap', 'useLayer'];

export const defaults: Options = {
  components: allComponents,
  imports: allImports,
  importUseFunctions: false,
  addLeafletStyle: true,
  addLibraryStyle: true,
  addNormalizeStyle: true
};
