import React from "react";
import PropTypes from "prop-types";

const Content = props => {
	return (
		<main style={{...props.style}} className={"mdl-layout__content "+ props.className}>	
			{props.children}
		</main>
	);
};

Content.propTypes = {
	className: PropTypes.string
};

Content.defaultProps = {
	className: ""
};

export default Content;