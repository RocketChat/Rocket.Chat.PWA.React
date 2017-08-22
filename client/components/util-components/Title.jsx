import React from "react";
import PropTypes from "prop-types";

const Title = props => {
	return (
		<h1 className="mdl-layout-title">{props.children}</h1>
	);
};

Title.propTypes = {
    
};

export default Title;