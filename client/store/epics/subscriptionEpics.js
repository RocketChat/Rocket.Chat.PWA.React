import { Observable } from "rxjs";

import { GET_SUBS } from "@actions/actionNames";
import { storeSubscriptions } from "@actions/subscriptionActions";

// Epic to get the Rooms user is subscribed to.
export const getSubscriptions = (action$, store, { realtimeAPI }) =>
	action$.ofType(GET_SUBS)
		.mergeMap(action => {
			if (store.getState().connection.isConnected && store.getState().user.isLoggedIn)
				return realtimeAPI.callMethod("subscriptions/get");
			else
				return Observable.of({ msg: "error", error: "Not Loggedin or Not Connected to Server" });
		}).map(msg => {
			switch (msg.msg) {
			case "result":
				return storeSubscriptions(msg.result);
			default:
				return ({ type: "ADD_ERROR", payload: msg.error });
			}
		});