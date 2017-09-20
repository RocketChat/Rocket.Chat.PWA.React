import React, { Component } from "react";

import "./ChatInput.css"

class ChatInput extends Component {

	componentDidMount() {
		componentHandler.upgradeDom();
	}

	render() {
		return (
            <div className="chatinput mdl-color--white mdl-shadow--2dp">
                <div className="mdl-cell--hide-desktop mdl-cell--hide-tablet chatinput__action-container">
                    <button className="mdl-button mdl-js-button mdl-button--icon"><i className="material-icons mdl-color-text--grey-600">tag_faces</i></button>
                    <button className="mdl-button mdl-js-button mdl-button--icon"><i className="material-icons mdl-color-text--grey-600">attach_file</i></button>
                    <button className="mdl-button mdl-js-button mdl-button--icon"><i className="material-icons mdl-color-text--grey-600">mic</i></button>
                    <button className="mdl-button mdl-js-button mdl-button--icon"><i className="material-icons mdl-color-text--grey-600">videocam</i></button>
                    <button className="mdl-button mdl-js-button mdl-button--icon"><i className="material-icons mdl-color-text--grey-600">location_on</i></button>
                </div>
                <form className="chatinput__message-input">
                    <div className="mdl-textfield mdl-js-textfield mdl-border">
                        <input autoComplete={false} autoSave={false} className="mdl-textfield__input" type="text" id="message" />
                        <label className="mdl-textfield__label" htmlFor="message">Your Message</label>
                    </div>
                    <button className="mdl-button mdl-js-button mdl-button--icon"><i className="material-icons">send</i></button>
                </form>
            </div>
		);
	}
}

export default ChatInput;