import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import {BuildOptionsType} from './types/config';

export function buildPlugins({paths}: BuildOptionsType): webpack.WebpackPluginInstance[] {

  return [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin()
  ]
}