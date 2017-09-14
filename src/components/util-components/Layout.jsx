import React from "react";
import PropTypes from "prop-types";

const Layout = props => {
	return (
		<div className={"mdl-layout " + props.className}>
			{props.children}
		</div>
	);
};

Layout.propTypes = {
	className : PropTypes.string
};

Layout.defaultProps = {
	className: ""
}
export default Layout;