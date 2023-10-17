export type BuildModeType = 'production' | 'development'

export type BuildPathsType = {
  entry: string
  build: string
  html: string
  src: string
}

export type BuildEnvType = {
  mode: BuildModeType
  port: number
  apiUrl: string
}

export type BuildOptionsType = {
  mode: BuildModeType
  paths: BuildPathsType
  isDev: boolean
  port: number
  apiUrl: string
}
