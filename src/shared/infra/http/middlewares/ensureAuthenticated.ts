import { ITokenProvider } from '@modules/user/providers/models/ITokenProvider';
import { AppError } from '@shared/errors/AppError';
import { container } from '@shared/infra/containers';
import { EnsureAuthenticatedHeader } from '@shared/infra/fastify/headers/EnsureAuthenticatedHeader';
import { Static } from '@sinclair/typebox';
import { FastifyRequest } from 'fastify';

interface IRequest extends FastifyRequest {
  headers: Static<typeof EnsureAuthenticatedHeader>;
}

interface IPayload {
  user_id: string;
}

export async function ensureAuthenticated(request: IRequest): Promise<void> {
  const { Authorization } = request.headers;

  if (!Authorization) {
    throw new AppError('Invalid authentication!', 401);
  }

  const [, token] = Authorization.split('Bearer ');

  if (token) {
    throw new AppError('Invalid authentication!', 401);
  }

  const tokenProvider: ITokenProvider = container.resolve('tokenProvider');

  const payload = await tokenProvider.validateToken<IPayload>(token);

  request.headers['user_id'] = payload.user_id;
}
