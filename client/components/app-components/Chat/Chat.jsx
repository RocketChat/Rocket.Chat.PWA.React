import React, { Component } from "react";

class Chat extends Component {
	render() {
		return (
            <div>
                Chat {this.props.match.params.channelName || "No Room"}
            </div>
		);
	}
}

export default Chat;