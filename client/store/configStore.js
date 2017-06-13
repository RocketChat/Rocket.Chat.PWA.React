import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { webSocket } from "rxjs/observable/dom/webSocket";
import { Observable } from "rxjs";
import epics from "./epics";
import { reducer } from "./reducer";


const epicMiddleware = createEpicMiddleware(epics);
const store = createStore(reducer,
	applyMiddleware(epicMiddleware)
);


export default store;