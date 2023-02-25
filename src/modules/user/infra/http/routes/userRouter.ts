import { FastifyInstance } from 'fastify';
import { authenticateUserShorthand } from '../../fastify/shorthands/authenticateUserShorthand';
import { createUserShorthand } from '../../fastify/shorthands/createUserShorthand';
import { authenticateUserHandle } from '../handlers/authenticateUserHandle';
import { createUserHandler } from '../handlers/createUserHandler';

export async function userRouter(app: FastifyInstance): Promise<void> {
  app.post('/', createUserShorthand, createUserHandler);

  app.post('/authenticate', authenticateUserShorthand, authenticateUserHandle);
}
