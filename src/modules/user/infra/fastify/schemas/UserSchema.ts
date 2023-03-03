import { Type } from '@sinclair/typebox';

export const UserSchema = Type.Object(
  {
    id: Type.String(),
    created_at: Type.String({ format: 'date-time' }),
    updated_at: Type.String({ format: 'date-time' }),
    name: Type.String(),
    email: Type.String(),
    password: Type.String(),
  },
  { description: 'User entity.' },
);
