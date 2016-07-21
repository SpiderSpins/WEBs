import React from 'react';
import ReactDOM from 'react-dom';
import BarChart from '../../src/bar/BarChart';

const mountNode = document.createElement('div');
document.body.appendChild(mountNode);

const data = [
	{ name: 'India', value: 60 },
	{ name: 'USA', value: 90 },
	{ name: 'China', value: 80 },
	{ name: 'UK', value: 75 },
	{ name: 'Japan', value: 95 }
];

ReactDOM.render(<BarChart data={data} />, mountNode);