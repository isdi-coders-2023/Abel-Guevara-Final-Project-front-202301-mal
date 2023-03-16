import { UserLog } from './UserModel';

export const loginUser = async (
  user: UserLog,
): Promise<{ accessToken: string }> => {
  const response = await fetch(
    'https://abel-guevara-final-project-back-202301.onrender.com/auth/login',
    {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    },
  );
  if (!response.ok) {
    throw new Error();
  }
  const loggedUser = await response.json();
  return loggedUser;
};
