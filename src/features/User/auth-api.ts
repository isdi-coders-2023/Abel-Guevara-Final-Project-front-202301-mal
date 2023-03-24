import UserModel, { AuthResponse, UserLog } from './UserModel';

export const loginUser = async (user: UserLog): Promise<AuthResponse> => {
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
  const loggedUser: AuthResponse = await response.json();

  if (!response.ok) {
    throw new Error(loggedUser.msg);
  }

  return loggedUser;
};

export const registerUser = async (user: UserModel) => {
  const response = await fetch(
    'https://abel-guevara-final-project-back-202301.onrender.com/auth/register',
    {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    },
  );
  const registerUser = await response.json();

  if (!response.ok) {
    throw new Error(registerUser.msg);
  }

  return registerUser;
};
