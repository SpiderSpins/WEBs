import React, {Component, PropTypes} from 'react';
import Bar from './Bar';

export default class extends Component {

	static propTypes = {
		data: PropTypes.array.isRequired,
		width: PropTypes.number.isRequired,
		height: PropTypes.number.isRequired,
		xScale: PropTypes.func.isRequired,
		yScale: PropTypes.func.isRequired
	};

	static defaultProps = {
		padding: 10
	};

	constructor(props) {
		super(props);
	}

	render() {
		const {xScale, yScale} = this.props;
		const barWidth = xScale.bandwidth();

		return <g>
			{
				this.props.data.map((d,i) => {
					return <Bar key={i}
								x={xScale(d.name)} 
								y={yScale(d.value)} 
								width={barWidth} 
								height={this.props.height - yScale(d.value)}/>
				})
			}
		</g>;
	}
};