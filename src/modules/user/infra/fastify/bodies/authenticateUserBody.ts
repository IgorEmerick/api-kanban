import { Type } from '@sinclair/typebox';

export const authenticateUserBody = Type.Object({
  email: Type.String(),
  password: Type.String(),
});
