/**
 * Type-only imports erased during TypeScript compilation.
 */

import type { xBuildConfig } from '@remotex-labs/xbuild';

/**
 * Imports
 */

import { version } from 'process';
import pkg from './package.json' with { type: 'json' };

/**
 * Config build
 */

export const config: xBuildConfig = {
    common: {
        esbuild: {
            bundle: false,
            minify: false,
            outdir: 'dist',
            target: [ `node${ version.slice(1) }` ],
            platform: 'node',
            packages: 'external',
            sourcemap: 'linked',
            legalComments: 'none',
            sourceRoot: `https://github.com/remotex-labs/xJet-core/tree/v${ pkg.version }/`
        }
    },
    variants: {
        index: {
            esbuild: {
                format: 'esm',
                entryPoints: {
                    'index': 'src/index.ts'
                }
            }
        }
    }
};
