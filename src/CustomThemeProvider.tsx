import React, { useState } from 'react';
import App from './App';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const CustomThemeProvider = () => {
	const [themeColor, setThemeColor] = useState<string>('light');

	const theme = React.useMemo(() => {
		const typographyCodes = {
			color: themeColor === 'dark' ? '#fff' : '#000',
		};

		return createMuiTheme({
			palette: {
				background: {
					paper: themeColor === 'dark' ? '#282c34' : '#fff',
				},
				type: themeColor === 'dark' ? 'dark' : 'light',
			},
			typography: {
				h5: typographyCodes,
				h4: typographyCodes,
				h6: typographyCodes,
				subtitle2: typographyCodes,
			},
		});
	}, [themeColor]);

	return (
		<ThemeProvider theme={theme}>
			<button
				type="button"
				onClick={() => {
					const newThemeColor =
						themeColor === 'dark' ? 'light' : 'dark';
					setThemeColor(newThemeColor);
				}}
			>
				Change Theme
			</button>
			<App />
		</ThemeProvider>
	);
};

export default CustomThemeProvider;
