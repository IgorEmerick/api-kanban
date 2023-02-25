import { buildErrorShorthand } from '@shared/utils/buildErrorShorthand';
import { RouteShorthandOptions } from 'fastify';
import { createUserBody } from '../bodies/createUserBody';
import { userShorthandPropertiesModel } from './models/userShorthandPropertiesModel';

export const createUserShorthand: RouteShorthandOptions = {
  schema: {
    description: 'Create user.',
    body: createUserBody,
    response: {
      201: {
        description: 'User sucessfuly created.',
        type: 'object',
        properties: userShorthandPropertiesModel,
      },
      400: buildErrorShorthand(400),
    },
  },
};
