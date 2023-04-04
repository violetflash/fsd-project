import webpack from 'webpack';

const typescriptLoader = {
  test: /\.tsx?$/,
  use: 'ts-loader',
  exclude: /node_modules/,
};

// порядок лоадеров имеет значение
export const buildLoaders = (): webpack.RuleSetRule[] => (
  [
    typescriptLoader
  ]
)