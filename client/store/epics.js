import { combineEpics } from "redux-observable";
import { Observable } from "rxjs";
import sha256 from "sha256";
import RealTimeAPISocket from "./RealTimeAPISocket";

const URL = "ws://localhost:3000/websocket";
let realtimeAPI = new RealTimeAPISocket(URL);

realtimeAPI.keepAlive(); // Ping Server

const initConnection = action$ =>
	action$.ofType("INIT")
		.mergeMap(action => {
			if (!action.payload.status.connected)
				return realtimeAPI.connectToServer();
		}).map(msg => ({ type: "CONNECTED" }));

const loginUser = action$ =>
	action$.ofType("LOGIN")
		.mergeMap(action => {
			if (action.payload.status.connected && !action.payload.status.login)
				return realtimeAPI.login(action.payload.user, action.payload.password);
		}).first().map(msg => ({ type: "STORE_LOGININFO", payload: msg }));


export default combineEpics(initConnection, loginUser); 