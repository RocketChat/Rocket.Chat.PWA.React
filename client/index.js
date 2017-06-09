import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import App from "./app-components/App/App";

const application  = (
	<BrowserRouter>
		<Route path="/" component={App}></Route>
	</BrowserRouter>
);

render(application,document.getElementById("root"));