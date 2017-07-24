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

const URL = "ws://localhost:3000/websocket";
let realtimeAPI = new RealTimeAPI(URL);

realtimeAPI.onError(err => store.dispatch({ type: "ADD_ERROR", payload: { reason: "Error" } }));
realtimeAPI.onMessage(msg => {
	if (typeof msg.type === "string" && msg.type === "error")
		store.dispatch({ type: "ADD_ERROR", payload: { reason: "Error Connecting to Server" } });
	else
		console.log(msg)
});
realtimeAPI.onCompletion(() => store.dispatch({ type: "ADD_ERROR", payload: { reason: "Not Connected to Server" } }));


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
	rooms: roomReducer
});

const store = createStore(reducers, applyMiddleware(epicMiddleware));

export default store;