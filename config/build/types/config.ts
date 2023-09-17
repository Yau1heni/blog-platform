export type BuildModeType = 'production' | 'development'

export type BuildPathsType = {
  entry: string
  build: string
  html: string
}

export type BuildOptionsType = {
  mode: BuildModeType;
  paths: BuildPathsType;
  isDev: boolean
}