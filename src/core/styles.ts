import { useNuxt } from '@nuxt/kit';
import { libraryName } from '../config';
import type { ModuleOptions } from '../types';
import { isArray } from '../utils';

export function resolveStyles(config: ModuleOptions) {
  const nuxt = useNuxt();
  const enabled = isArray(nuxt.options.css);

  if (config.leafletStyle) {
    enabled && nuxt.options.css.push('leaflet/dist/leaflet.css');
  }

  if (config.normalizeStyle) {
    enabled && nuxt.options.css.push(`${libraryName}/dist/normalize.css`);
  }

  if (config.libraryStyle) {
    enabled && nuxt.options.css.push(`${libraryName}/dist/style.css`);
  }
}
