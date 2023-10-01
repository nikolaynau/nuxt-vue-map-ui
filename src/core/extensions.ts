import { useNuxt, addPlugin, type Resolver } from '@nuxt/kit';
import { runtimeDir } from '../config';
import type { ModuleOptionExtensions, ModuleOptions } from '../types';
import { isObject } from '../utils';

export function resolveExtensions(config: ModuleOptions, resolver: Resolver) {
  const nuxt = useNuxt();
  const { extensions } = config;
  const allEnabled = extensions === true;
  const isObj = isObject(extensions);

  if (
    allEnabled ||
    (isObj && (extensions as ModuleOptionExtensions).locateControl)
  ) {
    nuxt.options.css.push(
      '@leaflet-extensions/locatecontrol/dist/leaflet-locatecontrol.css'
    );

    addPlugin({
      src: resolver.resolve(
        runtimeDir,
        'plugins',
        'locateControlExtension.client'
      )
    });
  }
}
