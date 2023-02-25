import { AuthenticateUserService } from '@modules/user/services/AuthenticateUserService';
import { container } from '@shared/infra/containers';
import { Static } from '@sinclair/typebox';
import { FastifyRequest } from 'fastify';
import { authenticateUserBody } from '../../fastify/bodies/authenticateUserBody';

interface IRequest extends FastifyRequest {
  body: Static<typeof authenticateUserBody>;
}

interface IResponse {
  token: string;
}

export async function authenticateUserHandle(
  request: IRequest,
): Promise<IResponse> {
  const { email, password } = request.body;

  const authenticateUserService: AuthenticateUserService = container.resolve(
    'authenticateUserService',
  );

  const token = await authenticateUserService.execute(email, password);

  return { token };
}
