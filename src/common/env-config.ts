import { LOCALHOST } from '../env/localhost.evn.properties';

const envConfig = {
  localhost: LOCALHOST,
};

interface ENV {
  API_BASE_URL?: string;
  REAL_API_FLAG?: boolean;
}

export const ENV_CONFIG: ENV = envConfig[(process.env as any).REACT_APP_ENV];
