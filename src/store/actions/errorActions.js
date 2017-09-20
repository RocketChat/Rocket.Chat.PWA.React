import { ADD_ERROR, REMOVE_ERROR } from "./actionNames";

export const addError = payload => ({type: ADD_ERROR, payload: payload});
export const removeError = payload => ({type: REMOVE_ERROR, payload: payload});