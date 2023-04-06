import { get, post, put } from "../utils/request";

/**
 * 登录
 * @param param
 * @returns
 */
export const loginAPI = ({ mobile, captcha }: User.IUserLoginInfo) => {
  return post("/api/v1/auth/login", {
    userName: mobile,
    pwd: captcha,
  });
};

/**
 * 获取验证码
 * @param mobile
 * @returns
 */
export const getCaptchaAPI = (mobile: string) => {
  return get("/api/v1/common/captcha", {
    mobile,
  });
};

/**
 * 注册
 * @param param0
 * @returns
 */
export const regAPI = ({ mobile, captcha }: User.IUserLoginInfo) => {
  return post("/api/v1/auth/reg", {
    userName: mobile,
    pwd: captcha,
  });
};

/**
 * 获取用户信息
 * @returns
 */
export const loadUserInfoAPI = () => get("/api/v1/members/info");

/**
 * 设置个人信息
 * @param data
 * @returns
 */
export const setInfoAPI = (data: User.IRealInfo) =>
  put("/api/v1/members/set_id_num", data);
