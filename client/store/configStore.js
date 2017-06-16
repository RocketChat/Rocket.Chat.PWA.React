import { createStore, applyMiddleware, combineReducers } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { webSocket } from "rxjs/observable/dom/webSocket";
import { Observable } from "rxjs";
import epics from "./epics";
import { connectionReducer } from "./reducers/connectionReducer";
import { userReducer } from "./reducers/userReducer";
import { errorReducer } from "./reducers/errorReducer";
import { roomReducer } from "./reducers/roomReducer";

const epicMiddleware = createEpicMiddleware(epics);

const reducers = combineReducers({
	connection : connectionReducer,
	user: userReducer,
	error: errorReducer,
	rooms: roomReducer,
});

const store = createStore(reducers, applyMiddleware(epicMiddleware));

export default store;