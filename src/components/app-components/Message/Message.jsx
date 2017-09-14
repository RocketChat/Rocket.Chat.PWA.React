import React, { Component } from "react";

import "./Message.css"
class Message extends Component {

    render() {
        return (
            <div className={"message " + this.props.type}>
                <div className="tail"/>   
                <div className="message-text">{this.props.children}</div>
            </div>
        );
    }
}

export default Message;