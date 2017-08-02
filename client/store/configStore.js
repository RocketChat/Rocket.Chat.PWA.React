/* eslint no-console: 0 */

import { createStore, applyMiddleware, combineReducers } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { webSocket } from "rxjs/observable/dom/webSocket";
import { Observable } from "rxjs";
import { RealTimeAPI } from "rocket.chat.realtime.api.rxjs";


import epics from "./epics/combinedEpics";
import reducers from "./reducers/combinedReducers";


const URL = "wss://demo.rocket.chat/websocket";
let realtimeAPI = new RealTimeAPI(URL);

realtimeAPI.onError(err => store.dispatch({ type: "ADD_ERROR", payload: { reason: "Error" } }));
realtimeAPI.onMessage(msg => {
	if (typeof msg.type === "string" && msg.type === "error")
		store.dispatch({ type: "ADD_ERROR", payload: { reason: "Error Connecting to Server" } });
});
realtimeAPI.onCompletion(() => store.dispatch({ type: "ADD_ERROR", payload: { reason: "Not Connected to Server" } }));


realtimeAPI.keepAlive(); // Ping Server


const epicMiddleware = createEpicMiddleware(epics, {
	dependencies: {
		realtimeAPI: realtimeAPI
	}
});

export const store = createStore(reducers, applyMiddleware(epicMiddleware));

