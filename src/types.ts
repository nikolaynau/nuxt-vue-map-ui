export type PresetImport = string | [name: string, as?: string, from?: string];

export interface Options {
  components: PresetImport[];
  imports: PresetImport[];
  importUseFunctions: boolean;
  addLeafletStyle: boolean;
  addNormalizeStyle: boolean;
  addLibraryStyle: boolean;
}

declare module '@nuxt/schema' {
  interface NuxtConfig {
    vueMap?: Partial<Options>;
  }
  interface NuxtOptions {
    vueMap?: Partial<Options>;
  }
}
