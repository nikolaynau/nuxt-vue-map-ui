import { addComponent, type Resolver } from '@nuxt/kit';
import { libraryName, rootComponentName, runtimeDir } from '../config';
import { toArray } from '../utils';
import type { ModuleOptions } from '../types';

export function resolveComponents(config: ModuleOptions, resolver: Resolver) {
  const { components } = config;
  const allComponents = new Set(components);

  addComponent({
    name: rootComponentName,
    filePath: resolver.resolve(
      runtimeDir,
      'components',
      'ServerPlaceholder.vue'
    ),
    mode: 'server'
  });

  for (const item of allComponents) {
    const [name, alias] = toArray(item);

    addComponent({
      export: name,
      name: alias || name,
      filePath: libraryName,
      mode: 'client'
    });
  }
}
