import React, {Component, PropTypes} from 'react';

export default class extends Component {

	static propTypes = {
		x: PropTypes.number,
		y: PropTypes.number,
		width: PropTypes.number,
		height: PropTypes.number,
		fill: PropTypes.string,
		className: PropTypes.string,
		style: PropTypes.object
	}

	render() {
		return <rect {...this.props}></rect>;
	}
};