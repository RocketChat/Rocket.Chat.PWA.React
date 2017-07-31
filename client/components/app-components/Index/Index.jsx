import React, { Component } from "react";
import { connect } from "react-redux";

import { initConnection } from "@actions/connectionActions";

import App from "@components/App/App";
import AppAuth from "@components/AppAuth/AppAuth";

class Index extends Component {

	componentWillMount() {
		this.props.dispatch(initConnection());
	}

	render() {
		return (		
			this.props.user.isLoggedIn ? 

			<App/>
			:
			<AppAuth/>
		);
	}
}

export default connect(state => state)(Index);