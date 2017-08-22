import React, { Component } from "react";

class Message extends Component {

    render() {
        return (
            <div className={"message " + this.props.type}>
                <div className="message-text">{this.props.children}</div>
            </div>
        );
    }
}

export default Message;