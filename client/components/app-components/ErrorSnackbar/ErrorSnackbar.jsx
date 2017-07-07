import React, { Component } from "react";

import { connect } from "react-redux";


class ErrorSnackbar extends Component {
	constructor(props){
		super(props);
		this.state = {error: props.error[props.error.length - 1]};
	}
	shouldComponentUpdate(nextProp, nextState){
		return nextProp.error !== this.props.error || this.state.error !== nextState.error;
	}
	componentWillUpdate(nextProp, nextState){
		this.setState({ error : nextProp.error[nextProp.error.length - 1] });
		return  nextProp.error !== this.props.error || this.state.error !== nextState.error && this.state.error !== undefined;
	}
	componentDidUpdate(){
		if(this.state.error !== undefined)
			setTimeout(
			() => {
				this.props.dispatch({type: "REMOVE_ERROR", payload: this.state.error});
				this.setState({ error : this.props.error[this.props.error.length - 1] });
			},2750);
	}
	isActive(){
		return this.state.error === undefined ? "" : " mdl-snackbar--active";  
	}

	getReason(){
		return this.state.error ? this.state.error.reason : "";
	}
	render() {
		return (
            <div ref="err-snackbar" id="err-snackbar" className={"mdl-snackbar" + this.isActive()}>
                <div ref="err-text" className="mdl-snackbar__text">{this.getReason()}</div>
                <button className="mdl-snackbar__action" type="button"></button>
            </div>
		);
	}
}

export default connect(state => state)(ErrorSnackbar);