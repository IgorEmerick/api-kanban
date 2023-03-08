import { CreateProjectService } from '@modules/board/services/CreateProjectService';
import { container } from '@shared/infra/containers';
import { Static } from '@sinclair/typebox';
import { FastifyReply, FastifyRequest } from 'fastify';
import { createProjectBody } from '../../fastify/bodies/createProjectBody';
import { createProjectHeader } from '../../fastify/headers/createProjectHeader';
import { Project } from '../../typeorm/entities/Project';

interface IRequest extends FastifyRequest {
  headers: Static<typeof createProjectHeader>;
  body: Static<typeof createProjectBody>;
}

export async function createProjectHandle(
  request: IRequest,
  reply: FastifyReply,
): Promise<Project> {
  const { user_id } = request.headers;
  const { name } = request.body;

  const createProjectService: CreateProjectService = container.resolve(
    'createProjectService',
  );

  const project = await createProjectService.execute({
    project_name: name,
    user_id,
  });

  reply.status(201);

  return project;
}
