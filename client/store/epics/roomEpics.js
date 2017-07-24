import { Observable } from "rxjs";

import { GET_ROOMS } from "./../actions/actionNames";
import { storeRooms } from "./../actions/roomActions";

// Epic to get the Rooms user is subscribed to.
export const getRooms = (action$, store, { realtimeAPI }) =>
	action$.ofType(GET_ROOMS)
		.mergeMap(action => {
			if (store.getState().connection.isConnected && store.getState().user.isLoggedIn)
				return realtimeAPI.callMethod("rooms/get", [{ "$date": Date.now() / 1000 }]);
			else
				return Observable.of({ msg: "error", error: "Not Loggedin or Not Connected to Server" });
		}).map(msg => {
			switch (msg.msg) {
			case "result":
				return storeRooms(msg.result);
			default:
				return ({ type: "ADD_ERROR", payload: msg.error });
			}
		});