import { useNuxt } from '@nuxt/kit';
import { libraryName } from '../config';
import type { ModuleOptionStyles, ModuleOptions } from '../types';
import { isArray, isObject } from '../utils';

export function resolveStyles(config: ModuleOptions) {
  const nuxt = useNuxt();
  const enabledCss = isArray(nuxt.options.css);
  if (!enabledCss) {
    return;
  }

  const { styles } = config;
  const allStyles = styles === true;
  const isObj = isObject(styles);

  if (allStyles || (isObj && (styles as ModuleOptionStyles).leafletStyle)) {
    nuxt.options.css.push('leaflet/dist/leaflet.css');
  }

  if (allStyles || (isObj && (styles as ModuleOptionStyles).normalizeStyle)) {
    nuxt.options.css.push(`${libraryName}/dist/normalize.css`);
  }

  if (allStyles || (isObj && (styles as ModuleOptionStyles).libraryStyle)) {
    nuxt.options.css.push(`${libraryName}/dist/style.css`);
  }

  if (allStyles || (isObj && (styles as ModuleOptionStyles).themeStyle)) {
    nuxt.options.css.push(`${libraryName}/dist/theme-all.css`);
  }
}
