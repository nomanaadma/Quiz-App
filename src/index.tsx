import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CustomThemeProvider from './CustomThemeProvider';

ReactDOM.render(
	<React.StrictMode>
		<CustomThemeProvider />
	</React.StrictMode>,
	document.getElementById('root')
);
