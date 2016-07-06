import React from 'react';
import ChartContainer from '../common/chartcontainer';

const BarChart = React.createClass({

	propTypes: {

	},

	render: function () {
		return <ChartContainer>
			{
				this.data.map(function (d, i) {
					return <Bar></Bar>
				})
			}
		</ChartContainer>;
	}
});

export default BarChart;