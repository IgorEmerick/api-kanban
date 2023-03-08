import { Type } from '@sinclair/typebox';

export const EnsureAuthenticatedHeader = Type.Object({
  Authorization: Type.String(),
});
