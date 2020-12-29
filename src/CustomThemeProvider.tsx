import React, { useState } from 'react';
import App from './App';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { themeColorsCentral } from './utils/Common';

const CustomThemeProvider = () => {
	const [darkTheme, setDarkTheme] = useState<boolean>(false);

	const theme = React.useMemo(() => {
		const typographyCodes = {
			color:
				darkTheme === true
					? themeColorsCentral.typoDark
					: themeColorsCentral.typoLight,
		};

		return createMuiTheme({
			palette: {
				background: {
					paper:
						darkTheme === true
							? themeColorsCentral.paperDark
							: themeColorsCentral.paperLight,
				},
				type:
					darkTheme === true
						? themeColorsCentral.dark
						: themeColorsCentral.light,
			},
			typography: {
				h5: typographyCodes,
				h4: typographyCodes,
				h6: typographyCodes,
				subtitle2: typographyCodes,
			},
		});
	}, [darkTheme]);

	return (
		<ThemeProvider theme={theme}>
			<App darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
		</ThemeProvider>
	);
};

export default CustomThemeProvider;
