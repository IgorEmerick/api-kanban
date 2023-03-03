import { buildErrorShorthand } from '@shared/utils/buildErrorShorthand';
import { RouteShorthandOptions } from 'fastify';
import { createUserBody } from '../bodies/createUserBody';
import { UserSchema } from '../schemas/UserSchema';

export const createUserShorthand: RouteShorthandOptions = {
  schema: {
    description: 'Create user.',
    body: createUserBody,
    response: {
      201: UserSchema,
      400: buildErrorShorthand(400),
    },
  },
};
