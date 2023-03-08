import { CreateProjectService } from '@modules/board/services/CreateProjectService';
import { AuthenticateUserService } from '@modules/user/services/AuthenticateUserService';
import { CreateUserService } from '@modules/user/services/CreateUserService';
import { asClass, AwilixContainer } from 'awilix';

export function registerServiceContainer(container: AwilixContainer): void {
  container.register(
    'createUserService',
    asClass(CreateUserService, { lifetime: 'SINGLETON' }),
  );

  container.register(
    'authenticateUserService',
    asClass(AuthenticateUserService, { lifetime: 'SINGLETON' }),
  );

  container.register(
    'createProjectService',
    asClass(CreateProjectService, { lifetime: 'SINGLETON' }),
  );
}
