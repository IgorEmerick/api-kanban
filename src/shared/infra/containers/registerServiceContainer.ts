import { CreateUserService } from '@modules/user/services/CreateUserService';
import { asClass, AwilixContainer } from 'awilix';

export function registerServiceContainer(container: AwilixContainer): void {
  container.register(
    'createUserService',
    asClass(CreateUserService, { lifetime: 'SINGLETON' }),
  );
}
