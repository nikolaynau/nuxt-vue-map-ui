export interface ModuleOptionStyles {
  leafletStyle: boolean;
  normalizeStyle: boolean;
  libraryStyle: boolean;
  themeStyle: boolean;
}

export interface ModuleOptions {
  components: string[];
  imports: string[];
  autoImports: boolean;
  styles: boolean | ModuleOptionStyles;
}
