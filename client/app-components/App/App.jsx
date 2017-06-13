import React, { Component } from "react";
import "./App.sass";
import { connect } from "react-redux";


class App extends Component {

	componentWillMount() {
		console.log("will mount");
		if (!this.props.status.connected)
			this.props.dispatch({ type: "INIT", payload: { status: { connected: this.props.status.connected } } });
	}

	handleClick() {
		console.log("click");
		if (this.props.status.connected && !this.props.status.login && this.refs.uname.value !== "" && this.refs.password.value !== "") {
			this.props.dispatch({
				type: "LOGIN", payload: {
					user: this.refs.uname.value,
					password: this.refs.password.value,
					status: {
						connected: this.props.status.connected,
						login: this.props.status.login
					}
				}
			});
		}
	}

	render() {
		console.log("render");
		return (
			<div>
				App
				<input type="text" placeholder="Username" ref="uname"/>
				<input type="password" placeholder="Password" ref="password"/>
				<button onClick={() => this.handleClick()}>Login</button>
				{JSON.stringify(this.props.status)}
			</div>
		);
	}
}

export default connect(state => state)(App);