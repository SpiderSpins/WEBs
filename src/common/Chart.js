import React, {Component, PropTypes} from 'react';

const Chart = class extends Component {

	static propTypes = {
		title: PropTypes.string,
		data: PropTypes.array.isRequired,
		width: PropTypes.number,
		height: PropTypes.number,
		margins: PropTypes.object
	};

	static defaultProps = {
		width: 600,
		height: 400
	};

	render() {
		const {width, height} = this.props;

		return <svg width={width} height={height}>
			{this.props.children}
		</svg>;
	}
};

export default Chart;