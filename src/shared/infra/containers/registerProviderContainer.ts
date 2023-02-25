import { BCryptHashProvider } from '@modules/user/providers/implementations/BCryptHashProvider';
import { JsonWebTokenProvider } from '@modules/user/providers/implementations/JsonWebTokenProvider';
import { asClass, AwilixContainer } from 'awilix';

export function registerProviderContainer(container: AwilixContainer): void {
  container.register(
    'hashProvider',
    asClass(BCryptHashProvider, { lifetime: 'SINGLETON' }),
  );

  container.register(
    'tokenProvider',
    asClass(JsonWebTokenProvider, { lifetime: 'SINGLETON' }),
  );
}
