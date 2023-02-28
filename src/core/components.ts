import { addComponent } from '@nuxt/kit';
import { libraryName } from '../config';
import { toArray } from '../utils';
import type { Options } from '../types';

export function resolveComponents(config: Options) {
  const { components } = config;
  const allComponents = new Set(components);

  for (const item of allComponents) {
    const [name, alias] = toArray(item);

    addComponent({
      export: name,
      name: alias || name,
      filePath: libraryName
    });
  }
}
