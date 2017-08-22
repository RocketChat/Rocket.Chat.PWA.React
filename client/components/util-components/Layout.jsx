import React from "react";
import PropTypes from "prop-types";

const Layout = props => {
	return (
		<div className={"mdl-layout " + props.class}>
			{props.children}
		</div>
	);
};

Layout.propTypes = {
	class : PropTypes.string
};

export default Layout;