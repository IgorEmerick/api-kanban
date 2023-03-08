import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';
import { FastifyInstance } from 'fastify';
import { createProjectShorthand } from '../../fastify/shothands/createProjectShorthand';
import { createProjectHandle } from '../handlers/createProjectHandle';

export async function projectRouter(app: FastifyInstance): Promise<void> {
  app.addHook('onRequest', ensureAuthenticated);

  app.post('/', createProjectShorthand, createProjectHandle);
}
