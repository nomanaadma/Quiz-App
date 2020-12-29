import logo from '../images/logo.png';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Switch } from '@material-ui/core';
import { themeColorsCentral } from '../utils/Common';
import moon from '../images/moon.svg';
import { ThemeTogglerProps } from '../types/QuizTypes';

const useStyles = makeStyles(theme => {
	const type = theme.palette.type;

	let styles = {
		thumb: {
			background: `url(${moon})`,
			backgroundPosition: 'center' as 'center',
			backgroundSize: '15px',
			backgroundRepeat: 'no-repeat',
			width: '25px',
			height: '25px',
			backgroundColor: themeColorsCentral.switchLight[0],
		},
		track: {
			borderRadius: '20px',
			border: '3px solid',
			borderColor: themeColorsCentral.switchLight[1],
			opacity: '1 !important',
			backgroundColor: themeColorsCentral.switchLight[2],
		},
		root: {
			width: '63px',
			height: '43px',
			position: 'absolute' as 'absolute',
			bottom: 0,
			right: 0,
			padding: '12px 12px 16px',
		},
		header: {
			textAlign: 'center' as 'center',
			paddingTop: '20px',
			position: 'relative' as 'relative',
		},
	};

	if (type === themeColorsCentral.dark) {
		styles.thumb.backgroundColor = themeColorsCentral.switchDark[0];
		styles.track.borderColor = themeColorsCentral.switchDark[1];
		styles.track.backgroundColor = themeColorsCentral.switchDark[2];
	}

	return styles;
});

const Header: React.FC<ThemeTogglerProps> = ({ darkTheme, setDarkTheme }) => {
	const classes = useStyles();
	return (
		<Container maxWidth="sm">
			<header className={classes.header}>
				<img src={logo} alt="Quiz App" style={{ width: '250px' }} />
				<Switch
					classes={{
						root: classes.root,
						thumb: classes.thumb,
						track: classes.track,
					}}
					color="default"
					checked={darkTheme}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
						setDarkTheme(e.target.checked);
					}}
				/>
			</header>
		</Container>
	);
};

export default Header;
