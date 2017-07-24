import { Observable } from "rxjs";
import { LOGIN } from "./../../actions/actionNames";

import { storeLoginInfo, storeUserInfo } from "./../../actions/userActions";
import { addError } from "./../../actions/errorActions";

// Epic to Login to the Server.
export const loginUser = (action$, store, { realtimeAPI }) =>
	action$.ofType(LOGIN)
		.throttleTime(2000)
		.mergeMap(action => {
			if (store.getState().connection.isConnected && !store.getState().user.isLoggedIn)
				return realtimeAPI.login(action.payload.username, action.payload.password);
			else {
				if (!store.getState().connection.isConnected)
					return Observable.of({ msg: "error", error: { reason: "Not Connected to Server" } });
				else
					return Observable.of({ msg: "error", error: { reason: "Already Logged In" } });
			}
		}).map(msg => {
			switch (msg.msg) {
				case "result":
					if (msg.result)
						return storeLoginInfo(msg.result);
					else
						return addError(msg.error);
				case "added":
					return storeUserInfo(msg.fields);
				case "error":
					return addError(msg.error);
			}
		});