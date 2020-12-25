import { Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	container: {
		backgroundColor: '#fff',
		borderRadius: '20px',
		padding: '20px',
		margin: '30px 0',
	},
	heading: {
		marginBottom: '30px',
		textAlign: 'center',
	},
	resultContainer: {
		display: 'grid',
		gridGap: '16px',
		gridTemplateColumns: '1fr 1fr',
	},
	propertyContent: {
		textAlign: 'right',
	},
	button: {
		textAlign: 'center',
		margin: '30px 0 10px',
	},
});

const Result = () => {
	const classes = useStyles();
	return (
		<Container maxWidth="xs">
			<div className={classes.container}>
				<Typography variant="h5" className={classes.heading}>
					Result
				</Typography>
				<div className={classes.resultContainer}>
					<Typography variant="subtitle2">Name</Typography>
					<Typography
						variant="subtitle2"
						className={classes.propertyContent}
					>
						Noman
					</Typography>
					<Typography variant="subtitle2">Total Questions</Typography>
					<Typography
						variant="subtitle2"
						className={classes.propertyContent}
					>
						10
					</Typography>
					<Typography variant="subtitle2">Score</Typography>
					<Typography
						variant="subtitle2"
						className={classes.propertyContent}
					>
						5
					</Typography>
					<Typography variant="subtitle2">Percentage</Typography>
					<Typography
						variant="subtitle2"
						className={classes.propertyContent}
					>
						50%
					</Typography>
					<Typography variant="subtitle2">
						Difficulty Level
					</Typography>
					<Typography
						variant="subtitle2"
						className={classes.propertyContent}
					>
						Easy
					</Typography>
					<Typography variant="subtitle2">Category</Typography>
					<Typography
						variant="subtitle2"
						className={classes.propertyContent}
					>
						General Knowledge
					</Typography>
				</div>
				<div className={classes.button}>
					<Button variant="contained">Try Again</Button>
				</div>
			</div>
		</Container>
	);
};

export default Result;
