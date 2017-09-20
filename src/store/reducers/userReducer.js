import { STORE_LOGIN_INFO, STORE_USER_INFO } from "@actions/actionNames";

export const userReducer = function (state = { isLoggedIn: false }, action) {
	switch (action.type) {
	case STORE_LOGIN_INFO:
		action.payload["tokenExpires"].$date = new Date(action.payload["tokenExpires"].$date);
		state = {
			...state,
			isLoggedIn: true,
			...action.payload
		};
		return state;
	case STORE_USER_INFO:
		state = {
			...state,
			...action.payload
		};
		return state;
	default:
		return state;
	}
};

