import 'reflect-metadata';
import { app } from '@shared/infra/http/app';
import { DefaultDataSource } from '@shared/infra/typeorm/data_sources/DefaultDataSource';
import { config } from 'dotenv';

config();

DefaultDataSource.initialize().then(async () => {
  app.listen({ port: Number(process.env.API_PORT) }).then(() => {
    console.log(`Server listening on port ${process.env.API_PORT}!`);
  });
});
