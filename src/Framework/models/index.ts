import { DataSource } from 'typeorm';

import * as dotenv from 'dotenv';
import { User } from '@src/User/models/User';
dotenv.config();

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: '192.168.16.111',
  port: 3309,
  username: 'root',
  password: 'nath',
  database: 'nathstore',
  synchronize: false,
  logging: true,
  entities: [User],
  subscribers: [],
  migrations: [],
});
