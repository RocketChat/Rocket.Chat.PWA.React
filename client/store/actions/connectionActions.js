import { INIT_CONNECTION, CONNECTION_ESTABLISHED } from "./actionNames";

export const initConnection = payload => ({type: INIT_CONNECTION, payload: payload});
export const connectionEstablished = payload => ({type: CONNECTION_ESTABLISHED, payload: payload});

