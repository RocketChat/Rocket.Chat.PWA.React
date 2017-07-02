import { Observable } from "rxjs";
import { LOGIN } from "./../../actions/actionNames";

import { storeLoginInfo, storeUserInfo } from "./../../actions/userActions";

// Epic to Login to the Server.
export const loginUser = (action$, store, { realtimeAPI }) =>
	action$.ofType(LOGIN)
		.debounceTime(2000)
		.mergeMap(action => {
			if (action.payload.connection.isConnected && !action.payload.connection.isLoggedIn)
				return realtimeAPI.login(action.payload.username, action.payload.password);
			else{
				if(!action.payload.connection.isConnected)
					return Observable.of({ msg: "error", error: {reason: "Not Connected to Server"} });
				else
					return Observable.of({ msg: "error", error: {reason: "Already Logged In"} });
			}
		}).map(msg => {
			switch (msg.msg) {
			case "result":
				if (msg.result) {
					return storeLoginInfo(msg.result);
				}
				else
					return ({ type: "ADD_ERROR", payload: msg.error });
			case "added":
				return storeUserInfo(msg.fields);
			case "error":
				return ({ type: "ADD_ERROR", payload: msg.error });
			}
		});
