/// <reference types="react-scripts" />

declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test'
    REACT_APP_OWM_API_KEY: string
  }
}
