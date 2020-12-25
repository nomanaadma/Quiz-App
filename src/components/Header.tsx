import logo from '../images/logo.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	header: {
		textAlign: 'center',
		paddingTop: '20px',
	},
});
const Header = () => {
	const classes = useStyles();
	return (
		<header className={classes.header}>
			<img src={logo} alt="Quiz App" style={{ width: '250px' }} />
		</header>
	);
};

export default Header;
