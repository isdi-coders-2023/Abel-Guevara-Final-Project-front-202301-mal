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

  rest.get(
    'https://abel-guevara-final-project-back-202301.onrender.com/api/v1/business',
    (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          {
            _id: '6419aa15b7698638cc0f3da7',
            categories: 'Barbería',
            nameBusiness: "La Habana 50's",
            address: 'Calle Obispo Bartolomé Espejo, 17, 29014, Málaga',
            phone: '697695015',
            profileUrl:
              'https://pvrpvjohhofutktrueiu.supabase.co/storage/v1/object/public/business/undefined1679403399044Habana%2050.jpeg',
            description: 'La mejor barber',
            reviews: ['muy bien atendido'],
            score: [5],
          },
        ]),
      );
    },
  ),
];

export const errorHandlers = [
  rest.get(
    'https://abel-guevara-final-project-back-202301.onrender.com/api/v1/business',
    (_req, res, ctx) => {
      return res.once(ctx.status(404), ctx.json(null));
    },
  ),
];
