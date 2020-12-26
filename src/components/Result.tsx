import { Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ResultPropsType, QuestionType } from '../types/QuizTypes';
import { Categories } from '../services/QuizCategories';

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

function getScore(data: QuestionType[]): number {
	let score = 0;

	for (const questionObj of data)
		if (questionObj.userAnswer === questionObj.answer) score++;

	return score;
}

const Result: React.FC<ResultPropsType> = ({
	levelState,
	categoryState,
	questionDataState: data,
	setResult,
	setSetting,
	setStep,
}) => {
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
						{data[0].length}
					</Typography>
					<Typography variant="subtitle2">Score</Typography>
					<Typography
						variant="subtitle2"
						className={classes.propertyContent}
					>
						{getScore(data[0])}
					</Typography>
					<Typography variant="subtitle2">Percentage</Typography>
					<Typography
						variant="subtitle2"
						className={classes.propertyContent}
					>
						{(getScore(data[0]) / data[0].length) * 100}%
					</Typography>
					<Typography variant="subtitle2">
						Difficulty Level
					</Typography>
					<Typography
						variant="subtitle2"
						className={classes.propertyContent}
					>
						{levelState.toUpperCase()}
					</Typography>
					<Typography variant="subtitle2">Category</Typography>
					<Typography
						variant="subtitle2"
						className={classes.propertyContent}
					>
						{Categories[categoryState]}
					</Typography>
				</div>
				<div className={classes.button}>
					<Button
						variant="contained"
						onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
							setResult(false);
							setSetting(true);
							setStep(0);
							data[1]([]);
						}}
					>
						Try Again
					</Button>
				</div>
			</div>
		</Container>
	);
};

export default Result;
