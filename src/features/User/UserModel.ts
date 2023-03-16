interface UserModel {
  email: string;
  password: string;
}
export type UserLog = Pick<UserModel, 'email' | 'password'>;
export default UserModel;
