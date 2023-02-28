export type PresetImport = string | [name: string, as?: string, from?: string];

export interface Options {
  components: PresetImport[];
  imports: PresetImport[];
  importsEnabled: boolean;
  leafletStyles: boolean;
  normalizeStyles: boolean;
  libraryStyles: boolean;
}

declare module '@nuxt/schema' {
  interface NuxtConfig {
    vueMap?: Partial<Options>;
  }
  interface NuxtOptions {
    vueMap?: Partial<Options>;
  }
}
