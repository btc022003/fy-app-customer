declare namespace User {
  type IUserLoginInfo = {
    /**
     * 手机号码
     */
    mobile: string;
    /**
     * 验证码
     */
    captcha: string;
  };

  type IUser = {
    id: string;
    userName: string;
    password: string;
    realName: string;
    idNum: string;
    isRealChecked: boolean;
    avatar: string;
    nickName: string;
    createdAt: Date;
    updatedAt: Date;
  };

  type ILandLord = {
    id: string;
    userName: string;
    password: string;
    avatar: string;
    nickName: string;
    realName: string;
    idNum: string;
    isRealChecked: boolean;
    isChecked: boolean;
    createdAt: string;
    updatedAt: string;
  };

  type IRealInfo = { realName: string; idNum: string; avatar: string };
}
