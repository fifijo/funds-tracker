import {
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_USERNAME,
  MONGO_PASSWORD,
} from 'config/env';

export const DB_URL = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}`;
