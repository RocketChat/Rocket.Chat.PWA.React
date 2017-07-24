import { ADD_ERROR, REMOVE_ERROR } from "./../actions/actionNames";

export const errorReducer = function (state = [], action) {
	switch (action.type) {
	case ADD_ERROR:
		state = [...state, action.payload];
		return state;
	case REMOVE_ERROR:
		if(action.payload !== undefined)
			state = state.filter( err => action.payload !== err );
		return state;
	default:
		return state;
	}
};

