export const reducer = function (state = {
	status: {
		connected: false,
		login: false
	}
}, action) {
	switch (action.type) {
	case "STORE_LOGININFO":
		state = {
			...state, status: {
				...state.status,
				login: true
			}, ...action.payload.result
		};
		return state;
	case "CONNECTED":
		state = {
			...state, status: {
				...state.status,
				connected: true
			}
		};
		return state;
	case "CLOSE_CONNECTION":
		state = {
			...state, status: {
				...state.status,
				connected: false,
				login: false
			}
		};
		return state;
	default:
		return state;
	}
};

