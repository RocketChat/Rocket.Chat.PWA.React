import { LOGIN, STORE_LOGIN_INFO, STORE_USER_INFO } from "./actionNames";

export const loginUser = payload => ({type: LOGIN, payload: payload});
export const storeLoginInfo = payload => ({type: STORE_LOGIN_INFO, payload: payload});
export const storeUserInfo = payload => ({type: STORE_USER_INFO, payload: payload});