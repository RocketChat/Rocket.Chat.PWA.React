export const errorReducer = function (state = {}, action) {
	switch (action.type) {
	case "LOGIN_ERROR":
		console.log("ERROR---->", action.payload);
		return state;
	case "ROOM_ERROR":
		console.log("ERROR---->", action.payload);
		return state;
	default:
		return state;
	}
};

