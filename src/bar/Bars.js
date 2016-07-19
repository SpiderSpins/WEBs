import React, {Component, PropTypes} from 'react';

export default class extends Component {

	static propTypes = {
		data: PropTypes.array.isRequired,
		width: PropTypes.number.isRequired,
		height: PropTypes.number.isRequired,
		padding: PropTypes.number
	};

	static defaultProps = {
		padding: 10
	};

	constructor(props) {
		super(props);
	}

	render() {
		const {xScale, yScale} = this.props;

		return <g>
			{
				this.props.data.map((d,i) => {
					return <Bar x={} y={} width={xScale.rangeBand()} height={}/>
				})
			}
		</g>;
	}
};