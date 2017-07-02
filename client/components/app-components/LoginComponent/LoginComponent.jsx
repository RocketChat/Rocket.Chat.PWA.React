import React, { Component } from "react";
import "./LoginComponent.sass";

import { connect } from "react-redux";

import { loginUser } from "./../../../store/actions/userActions";

class LoginComponent extends Component {
    
	handleFormSubmit(event){
		event.preventDefault();
		let username = this.refs["login-form"].username.value;
		let password = this.refs["login-form"].password.value;

		if(username.trim() === ""){
			this.refs.username.classList.add("is-invalid");
		}
		if(password.trim() === ""){
			this.refs.password.classList.add("is-invalid");
			return;
		}
		if(username.trim() !== "" && password.trim() !== "")
			this.props.dispatch(loginUser({
				username: username,
				password: password,
				connection: {
					isConnected: this.props.connection.isConnected,
					isLoggedIn: this.props.user.isLoggedIn
				}
			}));
		else
            return;
	}

	componentDidMount(){
		this.refs["login-form"].username.focus();
	}

	shouldComponentUpdate(){
		return false;
	}
    
	render() {
		return (
            <div className="mdl-card mdl-shadow--4dp login">
                <div className="mdl-card__title">
                    <h2 className="mdl-card__title-text">Login</h2>
                </div>
                <div className="mdl-card__supporting-text">
                    <form ref="login-form" action="#" onSubmit={this.handleFormSubmit.bind(this)}>
                        <div ref="username" className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input className="mdl-textfield__input" type="text" name="username" id="username"/>
                            <label className="mdl-textfield__label" htmlFor="username">Username</label>
                            <span className="mdl-textfield__error">Enter a Valid Username</span>

                        </div>
                        <div ref="password" className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                            <input className="mdl-textfield__input" type="password" name="password" id="password"/>
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

export default connect(state => state)(LoginComponent);