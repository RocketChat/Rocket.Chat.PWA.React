import React, { Component } from "react";
import "./App.sass";
import { connect } from "react-redux";


class App extends Component {

	componentWillMount() {
		if (!this.props.connection.isConnected)
			this.props.dispatch({ type: "INIT", payload: { connection: { isConnected: this.props.connection.isConnected } } });
	}

	handleClick() {
		if (this.props.connection.isConnected && !this.props.user.isLoggedIn && this.refs.uname.value !== "" && this.refs.password.value !== "") {
			this.props.dispatch({
				type: "LOGIN", payload: {
					user: this.refs.uname.value,
					password: this.refs.password.value,
					connection: {
						isConnected: this.props.connection.isConnected,
						isLoggedIn: this.props.user.isLoggedIn
					}
				}
			});
		}
	}

	handleClickRoom() {
		this.props.dispatch({
			type: "GET_ROOMS", payload: {
				connection: {
					isConnected: this.props.connection.isConnected,
					isLoggedIn: this.props.user.isLoggedIn
				}
			}
		});
	}

	render() {
		return (
			<div>
				<input type="text" placeholder="Username" ref="uname" />
				<input type="password" placeholder="Password" ref="password" />
				<button onClick={() => this.handleClick()}>Login</button>
				<button onClick={() => this.handleClickRoom()}>Get Rooms</button>
				<div>
					{JSON.stringify(this.props, null, "\t")}
				</div>
			</div>
		);
	}
}

export default connect(state => state)(App);