import { STORE_ROOMS } from "@actions/actionNames";

export const roomReducer = function (state = [], action) {
	switch (action.type) {
	case STORE_ROOMS:
		state = [
			...state,
			...action.payload
		];
		return state;
	default:
		return state;
	}
};