import { useNuxt } from '@nuxt/kit';
import { libraryName } from '../config';
import type { Options } from '../types';
import { isArray } from '../utils';

export function resolveStyles(config: Options) {
  const nuxt = useNuxt();
  const enabled = isArray(nuxt.options.css);

  if (config.addLeafletStyle) {
    enabled && nuxt.options.css.push('leaflet/dist/leaflet.css');
  }

  if (config.addNormalizeStyle) {
    enabled && nuxt.options.css.push(`${libraryName}/dist/normalize.css`);
  }

  if (config.addLibraryStyle) {
    enabled && nuxt.options.css.push(`${libraryName}/dist/style.css`);
  }
}
