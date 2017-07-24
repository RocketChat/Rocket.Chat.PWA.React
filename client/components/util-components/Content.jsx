import React from "react";
import PropTypes from "prop-types";

const Content = props => {
	return (
        <main className={"mdl-layout__content mdl-grid "+ props.class}>	
            {props.children}
        </main>
	);
};

Content.propTypes = {
	class: PropTypes.string
};

export default Content;