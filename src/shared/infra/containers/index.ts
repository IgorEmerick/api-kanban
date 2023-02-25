import { createContainer } from 'awilix';
import { registerProviderContainer } from './registerProviderContainer';
import { registerRepositoryContainer } from './registerRepositoryContainer';
import { registerServiceContainer } from './registerServiceContainer';

const container = createContainer({ injectionMode: 'CLASSIC' });

registerRepositoryContainer(container);
registerProviderContainer(container);
registerServiceContainer(container);

export { container };
