import { combineEpics } from "redux-observable";
import { Observable } from "rxjs";
import sha256 from "sha256";
import RealTimeAPISocket from "./RealTimeAPISocket";

const URL = "wss://demo.rocket.chat/websocket";
let realtimeAPI = new RealTimeAPISocket(URL);

realtimeAPI.onError(err => console.log("ERRR", err));
realtimeAPI.onComplete(() => console.log("Complete"));
realtimeAPI.onMessage( msg => console.log(msg));

realtimeAPI.keepAlive(); // Ping Server

// Epic to Initialize the Connection with the Server.
const initConnection = action$ =>
	action$.ofType("INIT")
		.mergeMap(action => {
			if (!action.payload.connection.isConnected)
				return realtimeAPI.connectToServer();
		})
		.map(msg => { 
			return ({ type: "CONNECTED", payload: {server: realtimeAPI.url} });
		});
		
// Epic to Login to the Server.
const loginUser = action$ =>
	action$.ofType("LOGIN")
		.mergeMap(action => {
			if (action.payload.connection.isConnected && !action.payload.user.isLoggedIn)
				return realtimeAPI.login(action.payload.user, action.payload.password);
		}).map(msg => {
			switch (msg.msg) {
			case "result":
				if(msg.result){
					return ({ type: "STORE_LOGININFO", payload: msg.result });
				}
				else
					return ({ type: "LOGIN_ERROR", payload: msg.error });
			case "added":
				return ({ type: "STORE_USERINFO", payload: msg.fields });
				
			case "error":
				return ({ type: "LOGIN_ERROR", payload: msg.error });
			}
		});

// Epic to get the Rooms user is subscribed to.
const getRooms = action$ =>
	action$.ofType("GET_ROOMS")
		.mergeMap(action => {
			if (action.payload.connection.isConnected && action.payload.connection.isLoggedIn){
				return realtimeAPI.getRooms();
			}
		}).map(msg => {
			switch (msg.msg) {
			case "result":
				return ({ type: "STORE_ROOMS", payload: msg.result });
			default:
				return ({ type: "ROOM_ERROR", payload: msg.error });
			}
		});

export default combineEpics(initConnection, loginUser, getRooms);