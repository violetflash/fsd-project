export type BuildMode = 'production' | 'development';

export type BuildPaths = Record<'entry' | 'build' | 'html', string>;
export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}