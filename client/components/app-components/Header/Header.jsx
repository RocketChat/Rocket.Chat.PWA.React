import React, { Component } from "react";

class Header extends Component {
	componentDidMount(){
		componentHandler.upgradeDom();
	}
	render() {
		return (
			<header className="mdl-layout__header mdl-color--primary">
				<div className="mdl-layout__header-row">
				</div>
			</header>
		);
	}
}

export default Header;