export const userReducer = function (state = { isLoggedIn: false }, action) {
	switch (action.type) {
	case "STORE_LOGININFO":
		action.payload["tokenExpires"].$date = new Date(action.payload["tokenExpires"].$date);
		state = {
			...state,
			isLoggedIn: true,
			...action.payload
		};
		return state;
	case "STORE_USERINFO":
		state = {
			...state,
			...action.payload
		};
		return state;
	default:
		return state;
	}
};

