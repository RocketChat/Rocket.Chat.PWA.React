import React, { Component } from "react";
import { connect } from "react-redux";

import ChatInput from "@components/ChatInput/ChatInput";
import { subscribeToRoom } from "@actions/roomActions";

class Chat extends Component {
	constructor(props){
		super(props);
		this.state = {
			lastestMessages: []
		};
	}
	componentWillReceiveProps(nextProps){
		this.setState({
			...nextProps.location.state // Room Info in State
		});
		
		if(nextProps.messages.fields)
			this.setState({
				...this.state,
				lastestMessages : [...this.state.lastestMessages, nextProps.messages ? nextProps.messages.fields.args.map(field => field.msg) : null]

			});
	}
	componentWillUpdate(nextProps, nextState){
		// console.info("current room ==>",nextState.name,nextState);
		
	}
	componentDidUpdate(prevProps, prevState){
		if(prevState.rid !== this.state.rid){
			this.props.dispatch({type:"CLOSE_SUB"}); //Unsuscribe to the Previous Channel
			this.props.dispatch(subscribeToRoom(this.state.rid)); // Subscribe to the New Channel
		}
	}
	render() {
		return (
			<div>
                Chat {this.props.match.params.channelName || "No Room"}
				{JSON.stringify(this.state.lastestMessages)}
				<ChatInput />	
			</div>
		);
	}
}

export default connect(state => state)(Chat);