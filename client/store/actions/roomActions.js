import { GET_ROOMS, STORE_ROOMS } from "./actionNames";

export const getRooms = payload => ({type: GET_ROOMS, payload: payload});
export const storeRooms = payload => ({type: STORE_ROOMS, payload: payload});
