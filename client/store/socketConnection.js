import { Observable } from "rxjs";
import store from "./configStore";

const URL = "ws://localhost:3000/websocket";

const socket = Observable.webSocket(URL);

socket.subscribe(
	msg => {
		if (msg.msg === "ping") {
			socket.next(JSON.stringify({ msg: "pong" }));
		}
	},
	err => console.log(err),
	() => {
		store.dispatch({ type: "CLOSE_CONNECTION" });
	}
);

socket.catch(err => console.error(err));

export default socket;