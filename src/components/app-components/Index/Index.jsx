import React, { Component } from "react";
import { connect } from "react-redux";

import { initConnection } from "@actions/connectionActions";

import App from "@components/App/App";
import AppAuth from "@components/AppAuth/AppAuth";
import ErrorSnackbar from "@components/ErrorSnackbar/ErrorSnackbar";


class Index extends Component {

	componentWillMount() {
		this.props.dispatch(initConnection());
	}

	render() {
		return (
			[
				this.props.user.isLoggedIn ? <App key="app" /> : <AppAuth key="auth" />,
				<ErrorSnackbar key="error-snackbar" />
			]
		);
	}
}

export default connect(state => state)(Index);