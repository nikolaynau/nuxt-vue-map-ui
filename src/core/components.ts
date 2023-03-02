import { addComponent, type Resolver } from '@nuxt/kit';
import { libraryName, runtimeDir } from '../config';
import { toArray } from '../utils';
import type { ModuleOptions } from '../types';

export function resolveComponents(config: ModuleOptions, resolver: Resolver) {
  const { components } = config;
  const allComponents = new Set(components);

  for (const item of allComponents) {
    const [name, alias] = toArray(item);

    addComponent({
      export: name,
      name: alias || name,
      filePath: libraryName,
      mode: 'client'
    });

    addComponent({
      name: alias || name,
      filePath: resolver.resolve(
        runtimeDir,
        'components',
        'ServerPlaceholder.vue'
      ),
      mode: 'server'
    });
  }
}
