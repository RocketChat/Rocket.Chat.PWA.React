import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class Drawer extends Component {

	componentDidMount() {
		componentHandler.upgradeDom();
	}

	render() {
		return (
			<div className="mdl-layout__drawer">
				<span className="mdl-layout-title">Title</span>
				<nav className="mdl-navigation">
					{this.props.subscriptions.map(subscription => <NavLink to={{
						pathname: "/chat/"+subscription.name,
						state: { ...subscription }
					}}  key={subscription.name} replace className="mdl-navigation__link">{subscription.name || "room"}</NavLink>)}
				</nav>
			</div>
		);
	}
}

export default connect(state => state)(Drawer);