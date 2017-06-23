/* eslint no-console: 0 */

import { createStore, applyMiddleware, combineReducers } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { webSocket } from "rxjs/observable/dom/webSocket";
import { Observable } from "rxjs";
import { RealTimeAPI } from "rocket.chat.realtime.api.rxjs";

import epics from "./epics/combinedEpics";
import { connectionReducer } from "./reducers/connectionReducer";
import { userReducer } from "./reducers/userReducer";
import { errorReducer } from "./reducers/errorReducer";
import { roomReducer } from "./reducers/roomReducer";

const URL = "wss://demo.rocket.chat/websocket";
let realtimeAPI = new RealTimeAPI(URL);

realtimeAPI.onError(err => console.log("Realtime API Error", err));
realtimeAPI.onCompletion(() => console.log("Realtime API Complete"));
realtimeAPI.onMessage(msg => console.log(msg));

realtimeAPI.keepAlive(); // Ping Server

const epicMiddleware = createEpicMiddleware(epics, {
	dependencies: {
		realtimeAPI: realtimeAPI
	}
});

const reducers = combineReducers({
	connection: connectionReducer,
	user: userReducer,
	error: errorReducer,
	rooms: roomReducer,
});

const store = createStore(reducers, applyMiddleware(epicMiddleware));

export default store;