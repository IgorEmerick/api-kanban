import { buildErrorShorthand } from '@shared/utils/buildErrorShorthand';
import { RouteShorthandOptions } from 'fastify';
import { authenticateUserBody } from '../bodies/authenticateUserBody';

export const authenticateUserShorthand: RouteShorthandOptions = {
  schema: {
    description: 'Authenticate an user.',
    body: authenticateUserBody,
    response: {
      200: {
        description: 'User successfully authenticated!',
        type: 'object',
        properties: {
          token: { type: 'string' },
        },
      },
      401: buildErrorShorthand(401, 'Invalid authentication!'),
    },
  },
};
