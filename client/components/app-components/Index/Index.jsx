import React, { Component } from "react";
import { connect } from "react-redux";

import { initConnection } from "./../../../store/actions/connectionActions";

import App from "./../App/App";
import AppAuth from "./../AppAuth/AppAuth";

class Index extends Component {

	componentDidMount() {
		this.props.dispatch(initConnection());
	}

	shouldComponentUpdate(nextProps){
		return this.props !== nextProps;
	}

	render() {
		return (		
			this.props.isLoggedIn ? 

			<App/>
			:
			<AppAuth/>
		);
	}
}

export default connect(state => state.user)(Index);