import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";

import Layout from "@utils/Layout";
import Content from "@utils/Content";

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
            <Layout class="mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
				<Drawer />
				<Header />
				<Content class="mdl-color--white">
					<Switch>
						<Route exact path="/" component={WelcomeScreen} />
						<Route path={"/chat/:channelName"} component={Chat} />
						<Route component={WelcomeScreen} />
					</Switch>
				</Content>
				<ErrorSnackbar/>
			</Layout>
		);
	}
}

export default connect(state => state)(App);