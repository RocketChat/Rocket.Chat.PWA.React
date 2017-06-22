import { combineEpics } from "redux-observable";

import { loginUser } from "./userEpics/loginEpics";
import { getRooms } from "./userEpics/roomEpics";
import { initConnection } from "./utilEpics/connectionEpics";

export default combineEpics(initConnection, loginUser, getRooms);