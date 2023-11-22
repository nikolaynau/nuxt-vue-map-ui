import { createResolver, defineNuxtModule } from '@nuxt/kit';
import { defaults } from './config';
import { resolveComponents, resolveImports, resolveStyles } from './core';
import type { ModuleOptions } from './types';
import { name, version } from '../package.json';

export type { ModuleOptions };

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'vueMap'
  },
  defaults,
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    resolveStyles(options);

    nuxt.options.imports.autoImport !== false &&
      options.autoImports &&
      resolveImports(options);

    nuxt.options.components !== false && resolveComponents(options, resolver);
  }
});
