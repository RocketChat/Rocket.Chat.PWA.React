import { combineEpics } from "redux-observable";

import { loginUser } from "./userEpics/loginEpics";
import { getRooms } from "./roomEpics";
import { initConnection } from "./connectionEpics";

export default combineEpics(initConnection, loginUser, getRooms);