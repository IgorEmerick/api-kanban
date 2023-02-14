import { CreateUserService } from '@modules/user/services/CreateUserService';
import { container } from '@shared/infra/containers';
import { Static } from '@sinclair/typebox';
import { FastifyReply, FastifyRequest } from 'fastify';
import { createUserBody } from '../../fastify/bodies/createUserBody';
import { User } from '../../typeorm/entities/User';

interface IRequest extends FastifyRequest {
  body: Static<typeof createUserBody>;
}

export async function createUserHandler(
  request: IRequest,
  reply: FastifyReply,
): Promise<User> {
  const { email, name, password } = request.body;

  const createUserService: CreateUserService =
    container.resolve('createUserService');

  const user = await createUserService.execute({ email, name, password });

  reply.status(201);

  return user;
}
