import React, {Component, PropTypes} from 'react';

const Bar = class extends Component {

	static propTypes = {
		x: PropTypes.number,
		y: PropTypes.number,
		width: PropTypes.number,
		height: PropTypes.number,
		fill: PropTypes.string,
		className: PropTypes.string,
		style: PropTypes.object
	};

	render() {
		return <rect {...this.props}></rect>;
	}
};

export default Bar;