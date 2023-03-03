import { FastifyInstance } from 'fastify';
import { authenticateUserShorthand } from '../../fastify/shorthands/authenticateUserShorthand';
import { createUserShorthand } from '../../fastify/shorthands/createUserShorthand';
import { authenticateUserHandle } from '../handlers/authenticateUserHandle';
import { createUserHandle } from '../handlers/createUserHandle';

export async function userRouter(app: FastifyInstance): Promise<void> {
  app.post('/', createUserShorthand, createUserHandle);

  app.post('/authenticate', authenticateUserShorthand, authenticateUserHandle);
}
