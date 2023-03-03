import { ProjectSchema } from '@modules/board/infra/fastify/schemas/ProjectSchema';
import { Type } from '@sinclair/typebox';

export const UserSchema = Type.Object(
  {
    id: Type.String(),
    created_at: Type.String({ format: 'date-time' }),
    updated_at: Type.String({ format: 'date-time' }),
    name: Type.String(),
    email: Type.String(),
    password: Type.String(),
    managed_projects: Type.Array(ProjectSchema),
    projects: Type.Array(ProjectSchema),
  },
  { description: 'User entity.' },
);
