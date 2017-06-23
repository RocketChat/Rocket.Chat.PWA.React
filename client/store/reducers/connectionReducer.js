import { CONNECTION_ESTABLISHED } from "./../actions/actionNames";

export const connectionReducer = function (state = { isConnected: false }, action) {
	switch (action.type) {
	case CONNECTION_ESTABLISHED:
		state = {
			...state,
			isConnected: true,
			server: action.payload.server
		};
		return state;
	case "CLOSE_CONNECTION":
		state = {
			...state,
			isConnected: false,
		};
		return state;
	default:
		return state;
	}
};