import React, {Component, PropTypes} from 'react';
import {scale} from 'd3';

export default class extends Component {

	static propTypes = {
		title: PropTypes.string,
		data: PropTypes.array.isRequired,
		width: PropTypes.number,
		height: PropTypes.number,
		margins: PropTypes.objectOf(PropTypes.number),
		axes: PropTypes.bool,
		type: PropTypes.string
	};

	static defaultProps = {
		width: 600,
		height: 400,
		margins: { top: 10, right: 20, bottom: 40, left: 45 },
		axes: true
	};

	render() {
		const {width, height} = this.props;
		let children, xScale, yScale;

		if(this.props.type === 'bar') {
			
		}

		return <svg width={width} height={height}>

		</svg>;
	}
};