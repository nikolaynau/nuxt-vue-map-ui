import { defineNuxtModule } from '@nuxt/kit';
import { defaults, libraryName } from './config';
import { resolveComponents, resolveImports, resolveStyles } from './core';
import type { Options } from './types';

export default defineNuxtModule<Partial<Options>>({
  meta: {
    name: libraryName,
    configKey: 'vueMap'
  },
  defaults,
  setup(_options, nuxt) {
    const options = _options as Options;

    resolveStyles(options);
    nuxt.options.imports.autoImport !== false &&
      options.autoImports &&
      resolveImports(options);
    nuxt.options.components !== false && resolveComponents(options);
  }
});
