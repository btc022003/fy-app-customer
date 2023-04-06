type IAppProvider = {
  socket?: Socket;
  setUserInfo?: React.Dispatch<React.SetStateAction<User.IUser | undefined>>;
  userInfo?: User.ILandLord;
};
