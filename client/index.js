import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { store, history } from "./store/configStore";
import Index from "@components/Index/Index";
import { Provider } from "react-redux";

import "material-design-lite";
import "./styles/global-styles.sass";

const application = (
	<Provider store={store}>
		<BrowserRouter>
			<Route component={Index} />
		</BrowserRouter>
	</Provider>
);

render(application, document.getElementById("root"));