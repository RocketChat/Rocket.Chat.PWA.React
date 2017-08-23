import React, { Component } from "react";
import { connect } from "react-redux";

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
	handleRoomChange(){
		this.props.dispatch({type:"CLOSE_SUB"}); //Unsuscribe to the Previous Channel
		this.props.dispatch(subscribeToRoom(this.state.rid)); // Subscribe to the New Channel
		this.setState({lastestMessages: []});
	}
	render() {
		return (
			<div ref={(e) => {this.chat = e;}} className="chat">
                <div className="message-container">
					{/* Dummy Messages */}
					<Message type="sent">
						Chat111111111111111111 {this.props.match.params.channelName || "No Room"}
						{JSON.stringify(this.state.lastestMessages)}
					</Message>
					<Message type="received">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo nam consequatur, soluta nulla dolore quia quo quaerat eum aperiam. Vel in sint mollitia sequi ad ab ex doloribus accusamus qui!
					</Message>
					<Message type="sent">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo nam consequatur, soluta nulla dolore quia quo quaerat eum aperiam. Vel in sint mollitia sequi ad ab ex doloribus accusamus qui!
					</Message>
					<Message type="received">
						Chat1 gsoc-pwa[["hyhhh"],["bmi.calculator"],["bmi.calculator"],["bmi.calculator"],["bmi.calculator"],["bmi.calculator"],["bmi.calculator"],["bmi.calculator"],["bmi.calculator"],["@catbot hello"],["@catbot hello"],["catbot"],[":thinking: "],[":thinking: "],["desculpe, não entendi.. pode tentar usar mais detalhes"],["desculpe, não entendi.. pode tentar usar mais detalhes"],["desculpe, não entendi.. pode tentar usar mais detalhes"],["@catbot help"],["@catbot help"],["acho que não estou treinado para responder esse tipo de assunto =("],["acho que não estou treinado para responder esse tipo de assunto =("],["catbot"],[":joy: "],[":joy: "]]
					</Message>
					<Message type="received">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo nam consequatur, soluta nulla dolore quia quo quaerat eum aperiam. Vel in sint mollitia sequi ad ab ex doloribus accusamus qui!
					</Message>
					<Message type="sent">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo nam consequatur, soluta nulla dolore quia quo quaerat eum aperiam. Vel in sint mollitia sequi ad ab ex doloribus accusamus qui!
					</Message>
					<Message type="received">
						Chat1 gsoc-pwa[["hyhhh"],["bmi.calculator"],["bmi.calculator"],["bmi.calculator"],["bmi.calculator"],["bmi.calculator"],["bmi.calculator"],["bmi.calculator"],["bmi.calculator"],["@catbot hello"],["@catbot hello"],["catbot"],[":thinking: "],[":thinking: "],["desculpe, não entendi.. pode tentar usar mais detalhes"],["desculpe, não entendi.. pode tentar usar mais detalhes"],["desculpe, não entendi.. pode tentar usar mais detalhes"],["@catbot help"],["@catbot help"],["acho que não estou treinado para responder esse tipo de assunto =("],["acho que não estou treinado para responder esse tipo de assunto =("],["catbot"],[":joy: "],[":joy: "]]
					</Message>
					<Message type="received">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo nam consequatur, soluta nulla dolore quia quo quaerat eum aperiam. Vel in sint mollitia sequi ad ab ex doloribus accusamus qui!
					</Message>
					<Message type="sent">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo nam consequatur, soluta nulla dolore quia quo quaerat eum aperiam. Vel in sint mollitia sequi ad ab ex doloribus accusamus qui!
					</Message>
					<Message type="received">
						Chat1 gsoc-pwa[["hyhhh"],["bmi.calculator"],["bmi.calculator"],["bmi.calculator"],["bmi.calculator"],["bmi.calculator"],["bmi.calculator"],["bmi.calculator"],["bmi.calculator"],["@catbot hello"],["@catbot hello"],["catbot"],[":thinking: "],[":thinking: "],["desculpe, não entendi.. pode tentar usar mais detalhes"],["desculpe, não entendi.. pode tentar usar mais detalhes"],["desculpe, não entendi.. pode tentar usar mais detalhes"],["@catbot help"],["@catbot help"],["acho que não estou treinado para responder esse tipo de assunto =("],["acho que não estou treinado para responder esse tipo de assunto =("],["catbot"],[":joy: "],[":joy: "]]
					</Message>
					<Message type="received">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo nam consequatur, soluta nulla dolore quia quo quaerat eum aperiam. Vel in sint mollitia sequi ad ab ex doloribus accusamus qui!
					</Message>
					<Message type="sent">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo nam consequatur, soluta nulla dolore quia quo quaerat eum aperiam. Vel in sint mollitia sequi ad ab ex doloribus accusamus qui!
					</Message>
					<Message type="received">
						Chat1 gsoc-pwa[["hyhhh"],["bmi.calculator"],["bmi.calculator"],["bmi.calculator"],["bmi.calculator"],["bmi.calculator"],["bmi.calculator"],["bmi.calculator"],["bmi.calculator"],["@catbot hello"],["@catbot hello"],["catbot"],[":thinking: "],[":thinking: "],["desculpe, não entendi.. pode tentar usar mais detalhes"],["desculpe, não entendi.. pode tentar usar mais detalhes"],["desculpe, não entendi.. pode tentar usar mais detalhes"],["@catbot help"],["@catbot help"],["acho que não estou treinado para responder esse tipo de assunto =("],["acho que não estou treinado para responder esse tipo de assunto =("],["catbot"],[":joy: "],[":joy: "]]
					</Message>
					<Message type="received">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo nam consequatur, soluta nulla dolore quia quo quaerat eum aperiam. Vel in sint mollitia sequi ad ab ex doloribus accusamus qui!
					</Message>
					<Message type="sent">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo nam consequatur, soluta nulla dolore quia quo quaerat eum aperiam. Vel in sint mollitia sequi ad ab ex doloribus accusamus qui!
					</Message>
					<Message type="received">
						Chat1 gsoc-pwa[["hyhhh"],["bmi.calculator"],["bmi.calculator"],["bmi.calculator"],["bmi.calculator"],["bmi.calculator"],["bmi.calculator"],["bmi.calculator"],["bmi.calculator"],["@catbot hello"],["@catbot hello"],["catbot"],[":thinking: "],[":thinking: "],["desculpe, não entendi.. pode tentar usar mais detalhes"],["desculpe, não entendi.. pode tentar usar mais detalhes"],["desculpe, não entendi.. pode tentar usar mais detalhes"],["@catbot help"],["@catbot help"],["acho que não estou treinado para responder esse tipo de assunto =("],["acho que não estou treinado para responder esse tipo de assunto =("],["catbot"],[":joy: "],[":joy: "]]
					</Message>
					<Message type="received">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo nam consequatur, soluta nulla dolore quia quo quaerat eum aperiam. Vel in sint mollitia sequi ad ab ex doloribus accusamus qui!
					</Message>
					<Message type="sent">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo nam consequatur, soluta nulla dolore quia quo quaerat eum aperiam. Vel in sint mollitia sequi ad ab ex doloribus accusamus qui!
					</Message>
					<Message type="received">
						Lasssssssssssssssssssst
					</Message>
				</div>
				<ChatInput />	
			</div>
		);
	}
}

export default connect(state => state)(Chat);