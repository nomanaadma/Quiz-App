import { Paper, Container, Typography, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import check from '../images/check.svg';
import unCheck from '../images/uncheck.svg';
import { QuestionAnswersPropsType, QuestionType } from '../types/QuizTypes';
import { primaryButton, getScore } from '../utils/Common';
import { decode } from 'he';

const useStyles = makeStyles({
	answerContainer: {
		marginBottom: '12px',
		padding: '16px 25px',
		borderRadius: '9px',
		display: 'flex',
		backgroundColor: '#e5e8ef',
		cursor: 'pointer',
		fontFamily: 'Montserrat',
	},
	heading: {
		marginBottom: '30px',
		textAlign: 'center',
		fontFamily: 'Roboto Slab',
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
	score: {
		marginTop: '20px',
		textAlign: 'center',
	},
	disabled: {
		pointerEvents: 'none',
	},
	buttonContainer: {
		display: 'grid',
		gridGap: '12px',
		gridTemplateColumns: '1fr 1fr',
		gridTemplateAreas: "'a b'",
	},
	button: {
		...primaryButton,
	},
});

const getquestionDataStateArray = (
	answer: string,
	step: number,
	questionDataState: QuestionType[]
): QuestionType[] => {
	return questionDataState.map((obj, index) => {
		if (index === step) {
			obj.userAnswer = answer;
		}
		return obj;
	});
};

const Quiz: React.FC<QuestionAnswersPropsType> = ({
	stepState,
	totalQuestions,
	requestState,
	resultState,
	questionDataState,
}) => {
	const contents = questionDataState[0][stepState[0]];

	const classes = useStyles();
	return (
		<Container maxWidth="sm">
			<div className={classes.score}>
				<Typography variant="h4">
					Score: {getScore(questionDataState[0])}
				</Typography>
				<Typography variant="h6">
					Question: {stepState[0] + 1} out of {totalQuestions}
				</Typography>
			</div>
			<Box
				style={{ backgroundColor: '#fff' }}
				borderRadius={20}
				my={'20px'}
				p={'20px'}
			>
				<Typography variant="h5" className={classes.heading}>
					{decode(contents.question)}
				</Typography>
				{contents.options.map((answer, key) => {
					let classNames = classes.answerContainer;

					const userSelectedAnswer = contents.userAnswer;

					let image = unCheck;

					// if user has selected any answer then disabled all the answers
					if (userSelectedAnswer !== '') {
						classNames = classNames + ' ' + classes.disabled;
					}

					// mark correct answer as green
					if (
						userSelectedAnswer !== '' &&
						answer === contents.answer
					) {
						classNames = classNames + ' ' + classes.correctAnswer;
						image = check;
					}

					// if the user has given the wrong answer then mark it as red
					if (
						userSelectedAnswer === answer &&
						userSelectedAnswer !== contents.answer
					) {
						classNames = classNames + ' ' + classes.wrongAnswer;
						image = unCheck;
					}

					return (
						<Paper
							className={classNames}
							elevation={0}
							key={key}
							onClick={(e: React.MouseEvent) => {
								const questionDataStateArray = getquestionDataStateArray(
									answer,
									stepState[0],
									questionDataState[0]
								);

								questionDataState[1](questionDataStateArray);
							}}
						>
							<img
								src={image}
								alt="check"
								className={classes.checkbox}
							/>
							<span>{decode(answer)}</span>
						</Paper>
					);
				})}

				<div className={classes.buttonContainer}>
					{stepState[0] !== 0 && (
						<Button
							className={classes.button}
							color="primary"
							variant="contained"
							onClick={(
								e: React.MouseEvent<HTMLButtonElement>
							) => {
								stepState[1](--stepState[0]);
							}}
						>
							Previous
						</Button>
					)}

					{contents.userAnswer !== '' && (
						<Button
							className={classes.button}
							style={{ gridArea: 'b' }}
							color="primary"
							variant="contained"
							onClick={(
								e: React.MouseEvent<HTMLButtonElement>
							) => {
								stepState[1](++stepState[0]);
								if (stepState[0] === totalQuestions) {
									requestState[1](false);
									resultState[1](true);
								}
							}}
						>
							{stepState[0] === totalQuestions - 1
								? 'Result'
								: 'Next'}
						</Button>
					)}
				</div>
			</Box>
		</Container>
	);
};

export default Quiz;
