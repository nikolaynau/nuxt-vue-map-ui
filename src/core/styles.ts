import { useNuxt } from '@nuxt/kit';
import { libraryName } from '../config';
import type { ModuleOptions } from '../types';
import { isArray } from '../utils';

export function resolveStyles(config: ModuleOptions) {
  const nuxt = useNuxt();
  const enabled = isArray(nuxt.options.css);

  if (config.leafletStyles) {
    enabled && nuxt.options.css.push('leaflet/dist/leaflet.css');
  }

  if (config.normalizeStyles) {
    enabled && nuxt.options.css.push(`${libraryName}/dist/normalize.css`);
  }

  if (config.libraryStyles) {
    enabled && nuxt.options.css.push(`${libraryName}/dist/style.css`);
  }
}
