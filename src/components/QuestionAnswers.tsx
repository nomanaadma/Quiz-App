import { Paper, Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import check from '../images/check.svg';
import unCheck from '../images/uncheck.svg';
import { QuestionAnswersPropsType, UserAnswerType } from '../types/QuizTypes';

const useStyles = makeStyles({
	answerContainer: {
		marginBottom: '12px',
		padding: '16px 25px',
		borderRadius: '9px',
		display: 'flex',
		backgroundColor: '#e5e8ef',
		cursor: 'pointer',
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
	disabled: {
		pointerEvents: 'none',
	},
});

const getNewUserAnswer = (
	step: number,
	answer: string,
	userAnswerState: UserAnswerType[]
): UserAnswerType[] => {
	return userAnswerState.map(obj => {
		if (obj.step === step) {
			obj.answer = answer;
		}

		return obj;
	});
};

const Quiz: React.FC<QuestionAnswersPropsType> = ({
	stepState,
	totalQuestions,
	requestState,
	resultState,
	contents,
	userAnswerState,
}) => {
	const classes = useStyles();
	return (
		<Container maxWidth="sm">
			<div className={classes.score}>
				<Typography variant="h4">Score: 0</Typography>
				<Typography variant="h6">
					Question: {stepState[0] + 1} out of {totalQuestions}
				</Typography>
			</div>
			<div className={classes.container}>
				<Typography variant="h5" className={classes.heading}>
					{contents.question}
				</Typography>
				{contents.options.map((answer, key) => {
					let classNames = classes.answerContainer;

					const userSelectedAnswer =
						userAnswerState[0][stepState[0]].answer;

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
								const generatedUserAnswer = getNewUserAnswer(
									stepState[0],
									answer,
									userAnswerState[0]
								);
								userAnswerState[1](generatedUserAnswer);
							}}
						>
							<img
								src={image}
								alt="check"
								className={classes.checkbox}
							/>
							<span>{answer}</span>
						</Paper>
					);
				})}

				<div>
					{stepState[0] !== 0 && (
						<Button
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

					<Button
						variant="contained"
						onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
							stepState[1](++stepState[0]);
							if (stepState[0] === totalQuestions) {
								requestState[1](false);
								resultState[1](true);
							}
						}}
					>
						Next
					</Button>
				</div>
			</div>
		</Container>
	);
};

export default Quiz;
