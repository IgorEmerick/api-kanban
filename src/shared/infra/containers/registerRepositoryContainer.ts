import { ProjectRepository } from '@modules/board/infra/typeorm/repositories/ProjectRepository';
import { UserRepository } from '@modules/user/infra/typeorm/repositories/UserRepository';
import { asClass, AwilixContainer } from 'awilix';

export function registerRepositoryContainer(container: AwilixContainer): void {
  container.register(
    'userRepository',
    asClass(UserRepository, { lifetime: 'SINGLETON' }),
  );

  container.register(
    'projectRepository',
    asClass(ProjectRepository, { lifetime: 'SINGLETON' }),
  );
}
