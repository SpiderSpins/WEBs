import React, {PropTypes} from 'react';

const ChartContainer = React.createClass({
	
	propTypes: {
		width: PropTypes.number,
		height: PropTypes.number
	},

	render: function () {
		return <svg width={this.props.width} height={this.props.height}>
			<g>
				<desc>{this.props.title}</desc>
				{this.props.children}
			</g>
		</svg>;
	}
});

export default ChartContainer;