export const EnvKeys = {
  nodeEnv: 'NODE_ENV',
  databaseUrl: 'DATABASE_URL',
  imagekitPublicKey: 'NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY',
  imagekitUrlEndpoint: 'NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT',
  imagekitPrivateKey: 'IMAGEKIT_PRIVATE_KEY',
  clerkFrontendApi: 'NEXT_PUBLIC_CLERK_FRONTEND_API',
  clerkSignInUrl: 'NEXT_PUBLIC_CLERK_SIGN_IN_URL',
  clerkSignUpUrl: 'NEXT_PUBLIC_CLERK_SIGN_UP_URL',
  clerkApiKey: 'CLERK_API_KEY',
} as const

export const Env = {
  nodeEnv: process.env[EnvKeys.nodeEnv] || 'development',
  databaseUrl: process.env[EnvKeys.databaseUrl],
  imagekit: {
    publicKey: process.env[EnvKeys.imagekitPublicKey],
    urlEndpoint: process.env[EnvKeys.imagekitUrlEndpoint],
    privateKey: process.env[EnvKeys.imagekitPrivateKey],
  },
  clerk: {
    frontendApi: process.env[EnvKeys.clerkFrontendApi],
    signInUrl: process.env[EnvKeys.clerkSignInUrl],
    signUpUrl: process.env[EnvKeys.clerkSignUpUrl],
    apiKey: process.env[EnvKeys.clerkApiKey],
  },
} as const

export type EnvKeysType = keyof typeof EnvKeys
export type EnvType = typeof Env
