import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Observable } from "rxjs";
import store from "./store/configStore";
import App from "./app-components/App/App";
import { Provider } from "react-redux";

const application = (
	<Provider store={store}>
		<BrowserRouter>
			<Route path="/" component={App}></Route>
		</BrowserRouter>
	</Provider>
);



render(application, document.getElementById("root"));

// let subject = Observable.webSocket('ws://localhost:3000/websocket')

// subject.next();

// let serverPipe = subject.map((msg)=>console.log(msg))


// let pingPipe = subject.map((msg)=> msg.msg)
// 	.filter((msg)=> msg === "ping")
// 	.map((msg)=> {subject.next(JSON.stringify({msg: "pong"}));return "pong Sent";});


// pingPipe.subscribe(
//    (msg) => console.log(msg),
//    (err) => console.log(err),
//    () => console.log('complete')
//  );
