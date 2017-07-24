import React, { Component } from "react";

class Drawer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			rooms: props.rooms ? props.rooms : []
		};
	}

	componentWillUpdate(nextProps) {
		if (this.props != nextProps)
			this.setState({ rooms: nextProps.rooms });
		return this.props != nextProps;
	}

	componentDidMount() {
		componentHandler.upgradeDom();
	}

	render() {
		return (
			<div className="mdl-layout__drawer">
				<span className="mdl-layout-title">Title</span>
				<nav className="mdl-navigation">
					{this.state.rooms.map(room => <a key={room._id} className="mdl-navigation__link" href="">{room.name || "room"}</a>)}
				</nav>
			</div>
		);
	}
}

export default Drawer;