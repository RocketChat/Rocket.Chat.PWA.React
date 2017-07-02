import React, { Component } from "react";

import { connect } from "react-redux";


class ErrorSnackbar extends Component {
	constructor(props){
		super(props);
	}
	shouldComponentUpdate(nextProp){
		return nextProp.error.length !== 0;
	}
	componentDidUpdate(){
		let nextProp = this.props;
		let reason = nextProp.error[0].reason;
		this.refs["err-snackbar"].classList.add("mdl-snackbar--active");
		this.refs["err-text"].textContent = reason;
		setTimeout(
			() => {
				this.refs["err-snackbar"].classList.remove("mdl-snackbar--active");
				this.props.dispatch({type: "REMOVE_ERROR", payload: nextProp.error[0]});
			},2750);
	}
	render() {
		return (
            <div ref="err-snackbar" id="err-snackbar" className="mdl-snackbar">
                <div ref="err-text" className="mdl-snackbar__text"></div>
                <button className="mdl-snackbar__action" type="button"></button>
            </div>
		);
	}
}

export default connect(state => state)(ErrorSnackbar);