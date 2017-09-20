import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";

import "./App.css"

import Layout from "@utils/Layout";
import Content from "@utils/Content";
import Title from "@utils/Title";

import Drawer from "@components/Drawer/Drawer";
import Header from "@components/Header/Header";
import ErrorSnackbar from "@components/ErrorSnackbar/ErrorSnackbar";
import Chat from "@components/Chat/Chat";
import WelcomeScreen from "@components/WelcomeScreen/WelcomeScreen";

import { getSubscriptions } from "@actions/subscriptionActions";

class App extends Component {


	componentWillMount() {
		this.props.dispatch(getSubscriptions());
	}

	componentDidMount() {
		componentHandler.upgradeDom();
	}
    
	render() {
		return (
			<Layout className="mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header app">
				<Drawer />
				<Header>
					<Title>{this.props.location.state ? ("@"+this.props.location.state.name) : ""}</Title>
				</Header>
				<Content className="app-content mdl-grid mdl-color--white">
					<Switch>
						<Route exact path="/" component={WelcomeScreen} />
						<Route path="/chat/:channelName" component={Chat} />
						<Route component={WelcomeScreen} />
					</Switch>
				</Content>
				<ErrorSnackbar/>
			</Layout>
		);
	}
}

export default withRouter(connect(state => state)(App));