import { STORE_SUBS } from "@actions/actionNames";

export const subscriptionReducer = function (state = [], action) {
	switch (action.type) {
	case STORE_SUBS:
		state = [
			...state,
			...action.payload
		];
		return state;
	default:
		return state;
	}
};