import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Observable } from "rxjs";
import store from "./store/configStore";
import Index from "./components/app-components/Index/Index";
import { Provider } from "react-redux";

import "material-design-lite";
import "./styles/global-styles.sass";

const application = (
	<Provider store={store}>
		<BrowserRouter>
			<Route component={Index}></Route>
		</BrowserRouter>
	</Provider>
);

render(application, document.getElementById("root"));