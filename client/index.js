import React from "react";
import { render } from "react-dom";
import { store, history } from "./store/configStore";
import Index from "./components/app-components/Index/Index";
import { Provider } from "react-redux";
import { ConnectedRouter, routerReducer, routerMiddleware, push } from "react-router-redux";

import "material-design-lite";
import "./styles/global-styles.sass";

const application = (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Index />
		</ConnectedRouter>
	</Provider>
);

render(application, document.getElementById("root"));