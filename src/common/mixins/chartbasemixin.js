import {PropTypes} from 'react';

const ChartBaseMixin = {

	propTypes: {
		width: PropTypes.number,
		height: PropTypes.number,
		title: PropTypes.string,
		data: PropTypes.array.isRequired
	},

	getDefaultProps: function () {
		return {
			width: 400,
			height: 300
		}
	}
};

export default ChartBaseMixin;