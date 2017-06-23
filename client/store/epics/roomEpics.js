import { Observable } from "rxjs";

import { GET_ROOMS } from "./../actions/actionNames";
import { storeRooms } from "./../actions/roomActions";

// Epic to get the Rooms user is subscribed to.
export const getRooms = (action$, store, { realtimeAPI }) =>
	action$.ofType(GET_ROOMS)
		.mergeMap(action => {
			if (action.payload.connection.isConnected && action.payload.connection.isLoggedIn)
				return realtimeAPI.callMethod("rooms/get", [{ "$date": Date.now() / 1000 }]);
			else
				return Observable.of({ msg: "error", error: "Not Loggedin or Not Connected to Server" });
		}).map(msg => {
			switch (msg.msg) {
			case "result":
				return storeRooms(msg.result);
			default:
				return ({ type: "ROOM_ERROR", payload: msg.error });
			}
		});
