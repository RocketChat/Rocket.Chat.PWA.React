import React, { Component } from "react";
import "./App.sass";
import { connect } from "react-redux";

import { initConnection } from "./../../../store/actions/connectionActions";

import LoginComponent from "./../LoginComponent/LoginComponent";
import ErrorSnackbar from "./../ErrorSnackbar/ErrorSnackbar";

class App extends Component {

	componentDidMount() {
		if (!this.props.connection.isConnected)
			this.props.dispatch(initConnection({
				connection: {
					isConnected: this.props.connection.isConnected
				}
			}));
	}

	shouldComponentUpdate(){
		return false;
	}

	render() {
		return (
			<div className="mdl-grid" id="app">
				<div className="mdl-cell mdl-cell--4-offset-desktop mdl-cell--2-offset-tablet mdl-cell--4-col mdl-cell--middle">
					<LoginComponent />
				</div>
					<ErrorSnackbar></ErrorSnackbar>
			</div>
		);
	}
}

export default connect(state => state)(App);