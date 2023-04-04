import webpack from 'webpack';
import { buildDevServer } from './build-dev-server';
import { buildLoaders } from './build-loaders';
import { pluginsBuild } from './build-plugins';
import { buildResolvers } from './build-resolvers';
import { BuildOptions } from './types/config';

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  const {
    mode,
    paths: {
      build,
      entry,
      html
    },
    isDev
  } = options;
  return {
    mode,
    module: {
      // поле для конфигурации лоадеров для обработки файлов,
      // которые выходят за рамки js (media, css, scss, ts, etc...)
      rules: buildLoaders()
    },
    resolve: buildResolvers(),
    entry,
    output: {
      filename: "[name].[contenthash].js",
      path: build,
      clean: true
    },
    plugins: pluginsBuild(options),
    devtool: isDev ? 'eval-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  }
}