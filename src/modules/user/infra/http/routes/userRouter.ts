import { FastifyInstance } from 'fastify';
import { createUserShorthand } from '../../fastify/shorthands/createUserShorthand';
import { createUserHandler } from '../handlers/createUserHandler';

export async function userRouter(app: FastifyInstance): Promise<void> {
  app.post('/', createUserShorthand, createUserHandler);
}
