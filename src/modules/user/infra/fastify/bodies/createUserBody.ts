import { Type } from '@sinclair/typebox';

export const createUserBody = Type.Object({
  name: Type.String(),
  email: Type.String(),
  password: Type.String(),
});
