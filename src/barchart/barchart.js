import React, {PropTypes} from 'react';
import ChartContainer from '../common/chartcontainer';
import ChartBaseMixin from '../common/mixins/chartbasemixin';
import Bar from './bar';

const BarChart = React.createClass({

	mixins: [ChartBaseMixin],

	propTypes: {
		padding: PropTypes.number,
		color: React.PropTypes.string
	},
	
	getDefaultProps: function () {
		return {
			padding: 10,
			color: 'purple'
		}	
	},

	render: function () {
		const barWidth = this.props.width / this.props.data.length - this.props.padding;
		const factor = this.props.height / Math.max(...this.props.data);

		return <ChartContainer width={this.props.width} height={this.props.height}>
					{
						this.props.data.map(function (d, i) {
							return <Bar key={i}
										x={(barWidth + this.props.padding) * i}
								        y={this.props.height - (d * factor)}
										width={barWidth}
										height={d * factor}
										fill={this.props.color}>
							       </Bar>
						}, this)
					}
				</ChartContainer>;
	}
});

export default BarChart;