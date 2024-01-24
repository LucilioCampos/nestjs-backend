import { NODE_ENV } from '../../app/constants';
import { Config } from './schema';
import test from './test';
import development from './development';

export const allConfigs: Record<string, Config> = {
  test,
  development,
};

const currentConfig = allConfigs[NODE_ENV];

if (!currentConfig) {
  throw new Error(`Can't find config for "${NODE_ENV}"`);
}

export default currentConfig;
