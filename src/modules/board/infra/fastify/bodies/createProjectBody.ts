import { Type } from '@sinclair/typebox';

export const createProjectBody = Type.Object({ name: Type.String() });
