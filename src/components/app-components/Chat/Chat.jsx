import React, { Component } from "react";
import { connect } from "react-redux";
import "./Chat.css";
import ChatInput from "@components/ChatInput/ChatInput";
import Message from "@components/Message/Message";
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
	componentDidUpdate(prevProps, prevState){
		if(prevState.rid !== this.state.rid){
			this.handleRoomChange();
		}
	}

	componentDidMount(){
		console.log("here")
		this.chat.scrollTop = this.chat.scrollHeight;
	}
	handleRoomChange(){
		this.props.dispatch({type:"CLOSE_SUB"}); //Unsuscribe to the Previous Channel
		this.props.dispatch(subscribeToRoom(this.state.rid)); // Subscribe to the New Channel
		this.setState({lastestMessages: []});
		this.chat.scrollTop = this.chat.scrollHeight;
		console.log("here")
	}
	render() {
		return (
			<div ref={(e) => {this.chat = e;}} className="mdl-cell mdl-cell--12-col mdl-grid chat">
                <div  className="message-container">
					{/* Dummy Messages */}
					<Message type="sent">
						Chat111111111111111111 {this.props.match.params.channelName || "No Room"}
						{JSON.stringify(this.state.lastestMessages)}
					</Message>
				</div>
				<ChatInput />	
			</div>
		);
	}
}

export default connect(state => state)(Chat);