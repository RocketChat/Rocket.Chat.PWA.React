import React, { Component } from "react";

import Layout from "./../../util-components/Layout";
import Content from "./../../util-components/Content";

import LoginComponent from "./../LoginComponent/LoginComponent";
import ErrorSnackbar from "./../ErrorSnackbar/ErrorSnackbar";


class AppAuth extends Component {

	componentDidMount() {
		componentHandler.upgradeDom();
	}

	render() {
		return (
            <Layout>
                <Content>
                    <div className="mdl-cell mdl-cell--4-offset-desktop mdl-cell--2-offset-tablet mdl-cell--4-col mdl-cell--middle">
                        <LoginComponent />
                    </div>
                </Content>
                <ErrorSnackbar />
            </Layout>
		);
	}
}

export default AppAuth;