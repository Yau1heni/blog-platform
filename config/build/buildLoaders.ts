import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BuildOptionsType} from './types/config';

export function buildLoaders({isDev}: BuildOptionsType): webpack.RuleSetRule[] {

  const typescriptLoaders = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const scssLoaders = {
      test: /\.s[ac]ss$/i,
      use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            modules: {
              auto: (resPath: string) => Boolean(resPath.includes('.module')),
              localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
            },
          }
        },
        "sass-loader",
      ],
    }

  return [
    typescriptLoaders, scssLoaders
  ]
}