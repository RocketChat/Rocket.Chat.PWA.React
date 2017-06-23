import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Observable } from "rxjs";
import store from "./store/configStore";
import App from "./components/app-components/App/App";
import { Provider } from "react-redux";

const application = (
	<Provider store={store}>
		<BrowserRouter>
			<Route path="/" component={App}></Route>
		</BrowserRouter>
	</Provider>
);

render(application, document.getElementById("root"));