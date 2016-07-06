import React, {PropTypes} from 'react';

const Bar = React.createClass({

	propTypes: {
		x: PropTypes.number,
		y: PropTypes.number,
		width: PropTypes.number,
		height: PropTypes.number,
		fill: PropTypes.string
	},

	render: function () {
		return <rect {...this.props}></rect>;
	}
});

export default Bar;