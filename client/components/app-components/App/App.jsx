import React, { Component } from "react";
import { connect } from "react-redux";

import Layout from "./../../util-components/Layout";
import Content from "./../../util-components/Content";

import Drawer from "./../Drawer/Drawer";
import Header from "./../Header/Header";
import ErrorSnackbar from "./../ErrorSnackbar/ErrorSnackbar";
import { getRooms } from "./../../../store/actions/roomActions";

class App extends Component {


	componentWillMount() {
		this.props.dispatch(getRooms());
	}

	componentDidMount() {
		componentHandler.upgradeDom();
	}
    
	render() {
		return (
            <Layout class="mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
				<Drawer {...this.props} />
				<Header />
				<Content class="mdl-color--white">
					<p className="mdl-cell">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic vel, quisquam cupiditate est vitae, quaerat non molestias veritatis voluptate facilis rerum illum id praesentium eligendi impedit nam minus reprehenderit error.</p>
				</Content>
				<ErrorSnackbar />
			</Layout>
		);
	}
}

export default connect(state => state)(App);