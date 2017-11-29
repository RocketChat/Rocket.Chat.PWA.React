import { GET_SUBS, STORE_SUBS } from "./actionNames";

export const getSubscriptions = payload => ({type: GET_SUBS, payload: payload});
export const storeSubscriptions = payload => ({type: STORE_SUBS, payload: payload});
