import { INIT_CONNECTION } from "./../../actions/actionNames";

import { connectionEstablished } from "./../../actions/connectionActions";

// Epic to Initialize the Connection with the Server.
export const initConnection = (action$, store, { realtimeAPI }) =>
	action$.ofType(INIT_CONNECTION)
		.mergeMap(action => {
			if (!action.payload.connection.isConnected)
				return realtimeAPI.connectToServer();
		})
		.map(msg => {
			return connectionEstablished({ server: realtimeAPI.url });
		});