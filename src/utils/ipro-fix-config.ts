const initEnv = {
  IPRO_FIX_API_BASE_URL: "",
  AUTH_SECRET: ""
}

const production: typeof initEnv = { ...initEnv }
production.AUTH_SECRET = process.env.AUTH_SECRET ?? ""
production.IPRO_FIX_API_BASE_URL = process.env.IPRO_FIX_API_BASE_URL ?? ""

const development: typeof initEnv = { ...initEnv }
development.AUTH_SECRET = process.env.AUTH_SECRET ?? ""
development.IPRO_FIX_API_BASE_URL = process.env.IPRO_FIX_API_BASE_URL ?? ""


let config: typeof production
switch (process.env.NEXT_PUBLIC_GOODWIN_ENV) {
  case 'production':
    config = production
    break
  case 'development':
  default:
    config = development
    break
}

export default config