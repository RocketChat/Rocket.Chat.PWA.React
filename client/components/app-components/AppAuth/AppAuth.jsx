import React, { Component } from "react";

import Layout from "@utils/Layout";
import Content from "@utils/Content";

import LoginComponent from "@components/LoginComponent/LoginComponent";
import ErrorSnackbar from "@components/ErrorSnackbar/ErrorSnackbar";


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
            </Layout>
		);
	}
}

export default AppAuth;