import { combineEpics } from "redux-observable";
import { Observable } from "rxjs";
import sha256 from "sha256";
import socket from "./socketConnection";

// Ping Server

socket.filter(msg => msg.msg === "ping")
	.map(msg => socket.next(JSON.stringify({msg:"pong"})));


socket.subscribe(
	data => console.log(data)
);

const initConnection = action$ =>
	action$.ofType("INIT")
		.do(
		action => {
			if (!action.payload.status.connected)
				socket.next(JSON.stringify({ "msg": "connect", "version": "1", "support": ["1", "pre2", "pre1"] }));
		}
		)
		.mergeMap(action => socket)
		.filter(msg => (msg.msg === "connected"))
		.map(msg => ({ type: "CONNECTED" }));


const loginUser = action$ =>
	action$.ofType("LOGIN")
		.do(
		action => {
			if (action.payload.status.connected && !action.payload.status.login)
				socket.next(JSON.stringify({
					"msg": "method",
					"method": "login",
					"params": [{
						"user": { "username": action.payload.user },
						"password": {
							"digest": sha256(action.payload.password),
							"algorithm": "sha-256"
						}
					}],
					"id": "7"
				}));
		}
		).mergeMap(action => socket)
		.filter(msg => (msg.msg === "result" && msg.id === "7" && !msg.error))
		.map(msg => ({ type: "STORE_LOGININFO", payload: msg }));

export default combineEpics(initConnection, loginUser); 