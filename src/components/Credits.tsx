import { makeStyles } from '@material-ui/core/styles';
import heart from '../images/heart.png';

const useStyles = makeStyles(theme => {
	const type = theme.palette.type;
	return {
		p: {
			textAlign: 'center',
			fontFamily: 'Montserrat',
			margin: 0,
			paddingBottom: '28px',
			color: type == 'dark' ? '#fff' : '#000',
		},
		img: {
			width: '19px',
			verticalAlign: 'text-bottom',
			margin: '0 5px',
		},
		a: {
			textDecoration: 'none',
			color: '#476ff5',
		},
	};
});

const Credits = () => {
	const classes = useStyles();
	return (
		<p className={classes.p}>
			Made with
			<img src={heart} alt="Love" className={classes.img} />
			By{' '}
			<a
				href="https://github.com/nomanaadma"
				target="_blank"
				rel="noreferrer"
				className={classes.a}
			>
				Noman Shoukat
			</a>
		</p>
	);
};

export default Credits;
