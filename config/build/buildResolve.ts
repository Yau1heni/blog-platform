import webpack from 'webpack';
import { BuildOptionsType } from './types/config';

export function buildResolve(options: BuildOptionsType): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {},
  };
}
