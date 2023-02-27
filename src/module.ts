import { defineNuxtModule, addPlugin, createResolver } from '@nuxt/kit';
import { name, version } from '../package.json';

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'vueMap'
  },
  defaults: {},
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);
    addPlugin(resolver.resolve('./runtime/plugin'));
  }
});
