import React, {PropTypes} from 'react';
import ChartBaseMixin from './mixins/chartbasemixin';

const ChartContainer = React.createClass({

	mixins: [ChartBaseMixin],

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