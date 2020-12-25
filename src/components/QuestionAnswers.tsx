import { Paper, Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import check from '../images/check.svg';
import unCheck from '../images/uncheck.svg';

const useStyles = makeStyles({
	answerContainer: {
		marginBottom: '12px',
		padding: '16px 25px',
		borderRadius: '9px',
		display: 'flex',
		backgroundColor: '#e5e8ef',
	},
	heading: {
		marginBottom: '30px',
		textAlign: 'center',
	},
	checkbox: {
		width: 15,
		marginRight: 10,
	},
	correctAnswer: {
		backgroundColor: '#8fd8a0',
	},
	wrongAnswer: {
		backgroundColor: '#ffa4a4',
	},
	container: {
		backgroundColor: '#fff',
		borderRadius: '20px',
		padding: '20px',
		margin: '30px 0',
	},
	score: {
		textAlign: 'center',
	},
});

const Quiz = () => {
	const classes = useStyles();
	return (
		<Container maxWidth="sm">
			<div className={classes.score}>
				<Typography variant="h4">Score: 0</Typography>
				<Typography variant="h6">Question: 1 out of 5</Typography>
			</div>
			<div className={classes.container}>
				<Typography variant="h5" className={classes.heading}>
					What do you do and when do you do?
				</Typography>
				<Paper
					className={`${classes.answerContainer} ${classes.correctAnswer}`}
					elevation={0}
				>
					<img src={check} alt="check" className={classes.checkbox} />
					<span>Answer 1</span>
				</Paper>
				<Paper className={classes.answerContainer} elevation={0}>
					<img
						src={unCheck}
						alt="check"
						className={classes.checkbox}
					/>
					<span>Answer 2</span>
				</Paper>
				<Paper
					className={`${classes.answerContainer} ${classes.wrongAnswer}`}
					elevation={0}
				>
					<img
						src={unCheck}
						alt="check"
						className={classes.checkbox}
					/>
					<span>Answer 3</span>
				</Paper>
				<Paper className={classes.answerContainer} elevation={0}>
					<img
						src={unCheck}
						alt="check"
						className={classes.checkbox}
					/>
					<span>Answer 4</span>
				</Paper>

				<div>
					<Button variant="contained">Previous</Button>
					<Button variant="contained">Next</Button>
				</div>
			</div>
		</Container>
	);
};

export default Quiz;
