type UserModel = {
  name: string;
  surname: string;
  email: string;
  password: string;
};
export type UserLog = Pick<UserModel, 'email' | 'password'>;

export interface AuthResponse {
  msg: string;
  accessToken: string;
}
export default UserModel;
