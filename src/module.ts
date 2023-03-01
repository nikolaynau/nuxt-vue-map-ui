import { defineNuxtModule } from '@nuxt/kit';
import { defaults } from './config';
import { resolveComponents, resolveImports, resolveStyles } from './core';
import type { ModuleOptions } from './types';
import { name, version } from '../package.json';

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'vueMap'
  },
  defaults,
  setup(options, nuxt) {
    resolveStyles(options);
    nuxt.options.imports.autoImport !== false &&
      options.autoImports &&
      resolveImports(options);
    nuxt.options.components !== false && resolveComponents(options);
  }
});
