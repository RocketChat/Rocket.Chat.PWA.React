export const connectionReducer = function (state = { isConnected: false }, action) {
	switch (action.type) {
	case "CONNECTED":
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