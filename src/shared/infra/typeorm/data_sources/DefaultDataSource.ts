import { config } from 'dotenv';
import { DataSource } from 'typeorm';

config();

export const DefaultDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DEFAULT_DATABASE_HOST,
  port: Number(process.env.DEFAULT_DATABASE_PORT),
  username: process.env.DEFAULT_DATABASE_USER,
  password: process.env.DEFAULT_DATABASE_PASSWORD,
  database: 'kanban',
  schema: 'public',
  synchronize: false,
  entities: ['./src/modules/**/infra/typeorm/entities/*.ts'],
  migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
});
