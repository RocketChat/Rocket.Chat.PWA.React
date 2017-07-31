import { combineReducers } from "redux";

import { connectionReducer } from "./connectionReducer";
import { userReducer } from "./userReducer";
import { errorReducer } from "./errorReducer";
import { roomReducer } from "./roomReducer";
import { subscriptionReducer } from "./subscriptionReducer";
import { routerReducer } from "react-router-redux";



export default combineReducers({
	connection: connectionReducer,
	user: userReducer,
	error: errorReducer,
	rooms: roomReducer,
	subscriptions: subscriptionReducer,
	routing: routerReducer
});