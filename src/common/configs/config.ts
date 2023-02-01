import type { Config } from './config.interface';

const config: Config = {
  nest: {
    port: Number(process.env.PORT) | 3000,
  },
  cors: {
    enabled: true,
  },
  security: {
    expiresIn: process.env.SECURITY_EXPIRE,
    refreshIn: process.env.SECURITY_REFRESH,
    bcryptSaltOrRound: Number(process.env.bcryptSaltOrRound),
  },
};

export default (): Config => config;
