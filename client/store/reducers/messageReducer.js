import { CONNECTION_ESTABLISHED } from "@actions/actionNames";

export const messageReducer = function (state = {}, action) {
	switch (action.type) {
	case "DISPLAY_MSG":
		state = {
			...state,
			...action.payload
		};
		return state;
	default:
		return state;
	}
};