import { buildErrorShorthand } from '@shared/utils/buildErrorShorthand';
import { RouteShorthandOptions } from 'fastify';
import { createProjectBody } from '../bodies/createProjectBody';
import { createProjectHeader } from '../headers/createProjectHeader';
import { ProjectSchema } from '../schemas/ProjectSchema';

export const createProjectShorthand: RouteShorthandOptions = {
  schema: {
    description: 'Create project.',
    headers: createProjectHeader,
    body: createProjectBody,
    response: {
      201: ProjectSchema,
      404: buildErrorShorthand(404, 'User not found!'),
    },
  },
};
