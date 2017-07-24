import React, { Component } from "react";

import { connect } from "react-redux";

import { loginUser } from "./../../../store/actions/userActions";

class LoginComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			username: null,
			password: null
		};
	}

	handleFormSubmit(event) {
		event.preventDefault();
		this.setState({
			username: event.target.username.value,
			password: event.target.password.value
		});
		if (event.target.username.value !== "" && event.target.password.value !== "")
			this.props.dispatch(loginUser({
				username: event.target.username.value,
				password: event.target.password.value
			}));
	}

	componentDidMount() {
		this.refs["login-form"].username.focus();
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextState.username !== this.state.username || nextState.password !== this.state.password;
	}

	isValid(element) {
		return this.state[element] === "" ? " is-invalid" : "";
	}

	handleInputChange(event) {
		this.setState({
			...this.state,
			[event.target.name]: event.target.value
		});
	}

	render() {
		return (
            <div className="mdl-card mdl-shadow--4dp login">
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">Login</h2>
                </div>
                <div className="mdl-card__supporting-text">
                    <form method="post" ref="login-form" action="#" onSubmit={this.handleFormSubmit.bind(this)}>
                        <div className={"mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-dirty" + (this.isValid("username"))}>
                            <input onChange={this.handleInputChange.bind(this)} className="mdl-textfield__input" type="text" name="username" id="username" />
                            <label className="mdl-textfield__label" htmlFor="username">Username</label>
                            <span className="mdl-textfield__error">Enter a Valid Username</span>
                        </div>
                        <div className={"mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-dirty" + (this.isValid("password"))}>
                            <input onChange={this.handleInputChange.bind(this)} className="mdl-textfield__input" type="password" name="password" id="password" />
                            <label className="mdl-textfield__label" htmlFor="password">Password</label>
                            <span className="mdl-textfield__error">Enter a Valid Password</span>
                        </div>
                        <div className="mdl-textfield">
                            <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" htmlFor="stay-signed-in">
                                <input type="checkbox" id="stay-signed-in" className="mdl-checkbox__input" />
                                <span className="mdl-checkbox__label">Stay Signed In</span>
                            </label>
                        </div>
                        <button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
                            Login
                        </button>
                    </form>
                </div>
                <div className="mdl-card__actions mdl-card--border">
                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                        Forgot Password ?
                    </a>
                    <div className="mdl-layout-spacer"></div>
                    <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                        Register
                    </a>
                </div>
            </div>
		);
	}
}

export default connect(state => ({ user: state.user }))(LoginComponent);