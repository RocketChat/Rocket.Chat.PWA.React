import { GET_ROOMS, STORE_ROOMS, SUBSCRIBE_TO_ROOM } from "./actionNames";

export const getRooms = payload => ({type: GET_ROOMS, payload: payload});
export const storeRooms = payload => ({type: STORE_ROOMS, payload: payload});
export const subscribeToRoom = payload => ({type: SUBSCRIBE_TO_ROOM, payload: payload});
