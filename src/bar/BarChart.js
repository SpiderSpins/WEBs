import React, {PropTypes} from 'react';
import {max} from 'd3-array';
import {scaleBand, scaleLinear} from 'd3-scale';
import Sandbox from '../common/Sandbox';
import Bars from './Bars';

export default class BarChart extends React.Component {

	static propTypes = {
		width: PropTypes.number,
		height: PropTypes.number,
		data: PropTypes.array.isRequired
	};

	static defaultProps = {
		width: 600,
		height: 400
	};

	render() {
		const {width, height, data} = this.props;

		const xScale = scaleBand()
							.domain(data.map(d => d.name))
							.rangeRound([0, width], true)
							.paddingInner(.1);

		const yScale = scaleLinear()
							.domain([0, max(data, d => d.value)])
							.range([height, 0]);


		return <Sandbox width={width} height={height}>
					<Bars data={data} width={width} height={height} xScale={xScale} yScale={yScale} />
				</Sandbox>;
	}
};