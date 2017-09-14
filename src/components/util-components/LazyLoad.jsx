import React, { Component } from "react";

class LazyLoad extends Component {
	constructor(){
		super();
		this.state = {
			mod: null
		};
	}

	componentWillMount() {
		this.load(this.props);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.load !== this.props.load) {
			this.load(nextProps);
		}
	}

	load(props) {
		this.setState({
			mod: null
		});
		props.load((mod) => {
			this.setState({
				mod: mod.default ? mod.default : mod
			});
		});
	}

	render() {
		if(this.state.mod)
			return this.props.children(this.state.mod);
		else
			return null;
	}
}

export default LazyLoad;