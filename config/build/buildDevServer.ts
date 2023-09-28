import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptionsType } from './types/config';

export function buildDevServer(options: BuildOptionsType): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
}
