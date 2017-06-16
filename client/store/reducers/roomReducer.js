export const roomReducer = function (state = {}, action) {
	switch (action.type) {
	
	case "STORE_ROOMS":
		state = {
			...state,
			...action.payload.update
		};
		return state;

	default:
		return state;
	}
};