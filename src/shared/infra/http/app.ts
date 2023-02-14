import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import { userRouter } from '@modules/user/infra/http/routes/userRouter';
import fastify from 'fastify';

const app = fastify();

app.register(fastifySwagger, {
  swagger: {
    info: {
      title: 'Api Kanban',
      version: '1.0.0',
      contact: {
        email: 'igorbarbosaemerick@gmail.com',
        name: 'Igor Emerick',
        url: 'https://www.linkedin.com/in/igor-emerick-b55a44159/',
      },
      description: 'Api to Kanban project.',
    },
    host: 'localhost',
  },
});

app.register(fastifySwaggerUi, {
  routePrefix: '/documentation',
  staticCSP: true,
});

app.register(userRouter, { prefix: '/user' });

export { app };
