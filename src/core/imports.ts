import { addImportsSources } from '@nuxt/kit';
import { libraryName } from '../config';
import type { Options } from '../types';

export function resolveImports(config: Options) {
  const { imports } = config;
  const allImports = new Set(imports);

  addImportsSources({
    from: libraryName,
    imports: [...allImports]
  });
}
