import React, {PropTypes} from 'react';

export default class Sandbox extends React.Component {

	static propTypes = {
		width: PropTypes.number,
		height: PropTypes.number
	};

	static defaultProps = {
		width: 600,
		height: 400
	};

	render() {
		return <svg width={this.props.width} height={this.props.height}>
				  {this.props.children}
			   </svg>;
	}
};