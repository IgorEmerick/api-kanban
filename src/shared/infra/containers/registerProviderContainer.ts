import { BCryptHashProvider } from '@modules/user/providers/implementations/BCryptHashProvider';
import { asClass, AwilixContainer } from 'awilix';

export function registerProviderContainer(container: AwilixContainer): void {
  container.register(
    'hashProvider',
    asClass(BCryptHashProvider, { lifetime: 'SINGLETON' }),
  );
}
