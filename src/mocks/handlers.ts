import { rest } from 'msw';

export const handlers = [
  rest.post(
    'https://abel-guevara-final-project-back-202301.onrender.com/auth/login',
    (_req, res, ctx) => {
      return res(ctx.status(201), ctx.json({ msg: 'Usted ha sido logueado' }));
    },
  ),
];

export const errorHandlers = [
  rest.post(
    'https://abel-guevara-final-project-back-202301.onrender.com/auth/login',
    (_req, res, ctx) => {
      return res(
        ctx.status(404),
        ctx.json({ msg: 'Ha habido un error, inténtelo nuevamente' }),
      );
    },
  ),
];
