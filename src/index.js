import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from "@components/Index/Index";
import { store } from "./store/configStore";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux"
import registerServiceWorker from './registerServiceWorker';

import "material-design-lite";
import "./index.css";
const application = (
	<Provider store={store}>
		<BrowserRouter>
			<Route path="/" component={Index}></Route>
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(application, document.getElementById("root"));

registerServiceWorker();
