import React from 'react';
import ReactDOM from 'react-dom';
import BarChart from './src/barchart/barchart';

ReactDOM.render(<BarChart data={[10, 20, 25, 15, 30]}/>,
	document.getElementById('container'));