import { BuildOptions } from './types/config';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export const buildDevServer = (options: BuildOptions): DevServerConfiguration => {
  return {
    port: options.port,
    historyApiFallback: true,
    hot: true,
    open: true
    // Попытка открытия проекта в уже существующей вкладке, вместо новой
    // onAfterSetupMiddleware: () => {
    //     open(`http://localhost:${options.port}`);
    // }
  }
}