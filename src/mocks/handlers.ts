import { rest } from 'msw';

export const handlers = [
  rest.post(
    'https://abel-guevara-final-project-back-202301.onrender.com/auth/login',
    async (req, res, ctx) => {
      const request = await req.json();
      const { email } = request;

      if (email === 'pepito@test.com') {
        return res(
          ctx.status(201),
          ctx.json({ msg: 'Usted ha sido logueado' }),
        );
      }

      return res(
        ctx.status(404),
        ctx.json({ msg: 'Su correo o contraseña no existe' }),
      );
    },
  ),

  rest.post(
    'https://abel-guevara-final-project-back-202301.onrender.com/auth/register',
    async (req, res, ctx) => {
      const request = await req.json();
      const { email } = request;
      if (email !== 'email@test.com') {
        return res(
          ctx.status(201),
          ctx.json({ msg: 'Su usuario ha sido registrado' }),
        );
      }

      return res(
        ctx.status(409),
        ctx.json({ msg: 'Su usuario ya está registrado' }),
      );
    },
  ),
];
