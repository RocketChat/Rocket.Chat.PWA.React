import { Observable } from "rxjs";
import { LOGIN } from "./../../actions/actionNames";

import { storeLoginInfo, storeUserInfo } from "./../../actions/userActions";

// Epic to Login to the Server.
export const loginUser = (action$, store, { realtimeAPI }) =>
	action$.ofType(LOGIN)
		.mergeMap(action => {
			if (action.payload.connection.isConnected && !action.payload.connection.isLoggedIn)
				return realtimeAPI.login(action.payload.user, action.payload.password);
			else
				return Observable.of({ msg: "error", error: "Is Logged in or Not Connected to Server" });
		}).map(msg => {
			switch (msg.msg) {
			case "result":
				if (msg.result) {
					return storeLoginInfo(msg.result);
				}
				else
					return ({ type: "LOGIN_ERROR", payload: msg.error });
			case "added":
				return storeUserInfo(msg.fields);

			case "error":
				return ({ type: "LOGIN_ERROR", payload: msg.error });
			}
		});
