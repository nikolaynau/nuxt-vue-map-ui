export type PresetImport = string | [name: string, as?: string, from?: string];

export interface ModuleOptions {
  components: PresetImport[];
  imports: PresetImport[];
  autoImports: boolean;
  leafletStyles: boolean;
  normalizeStyles: boolean;
  libraryStyles: boolean;
}

declare module '@nuxt/schema' {
  interface NuxtConfig {
    ['vueMap']?: Partial<ModuleOptions>;
  }
  interface NuxtOptions {
    ['vueMap']?: ModuleOptions;
  }
}
