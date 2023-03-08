import { UserSchema } from '@modules/user/infra/fastify/schemas/UserSchema';
import { Type } from '@sinclair/typebox';

export const ProjectSchema = Type.Object(
  {
    id: Type.String(),
    created_at: Type.String({ format: 'date-time' }),
    updated_at: Type.String({ format: 'date-time' }),
    name: Type.String(),
    admins: Type.Array(UserSchema),
    members: Type.Array(UserSchema),
  },
  { description: 'Project entity.' },
);
