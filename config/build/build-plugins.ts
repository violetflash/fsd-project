import HTMLWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export const pluginsBuild = (options: BuildOptions): webpack.WebpackPluginInstance[] => (
  [
    new HTMLWebpackPlugin({
      template: options.paths.html
    }),
    new webpack.ProgressPlugin()
  ]
)