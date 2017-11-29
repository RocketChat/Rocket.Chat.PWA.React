import React, { Component } from "react";

import Layout from "@utils/Layout";
import Content from "@utils/Content";

import LoginComponent from "@components/LoginComponent/LoginComponent";


class AppAuth extends Component {

	componentDidMount() {
		componentHandler.upgradeDom();
	}

	render() {
		return (
            <Layout>
                <Content className="mdl-grid">
                    <div className="mdl-cell mdl-cell--4-offset-desktop mdl-cell--2-offset-tablet mdl-cell--4-col mdl-cell--middle">
                        <LoginComponent />
                    </div>
                </Content>
            </Layout>
		);
	}
}

export default AppAuth;