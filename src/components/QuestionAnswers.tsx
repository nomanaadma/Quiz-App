import { Paper, Container, Typography, Button, Box } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import check from '../images/check.svg';
import unCheck from '../images/uncheck.svg';
import checkDark from '../images/check-dark.svg';
import unCheckDark from '../images/uncheck-dark.svg';
import { QuestionAnswersProps, Question } from '../types/QuizTypes';
import { primaryButton, getScore, themeColorsCentral } from '../utils/Common';
import { decode } from 'he';

const useStyles = makeStyles(theme => {
	const type = theme.palette.type;

	const styles = {
		answerContainer: {
			marginBottom: '12px',
			padding: '16px 25px',
			borderRadius: '9px',
			display: 'flex',
			backgroundColor: themeColorsCentral.answerLight,
			cursor: 'pointer',
			fontFamily: 'Montserrat',
		},
		heading: {
			marginBottom: '30px',
			textAlign: 'center' as 'center',
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
			textAlign: 'center' as 'center',
		},
		disabled: {
			pointerEvents: 'none' as 'none',
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
		box: {
			backgroundColor: themeColorsCentral.boxLight,
		},
	};

	if (type === themeColorsCentral.dark) {
		styles.box.backgroundColor = themeColorsCentral.boxDark;
		styles.answerContainer.backgroundColor = themeColorsCentral.answerDark;
	}

	return styles;
});

const getquestionDataStateArray = (
	answer: string,
	step: number,
	questionDataState: Question[]
): Question[] => {
	return questionDataState.map((obj, index) => {
		if (index === step) {
			obj.userAnswer = answer;
		}
		return obj;
	});
};

const Quiz: React.FC<QuestionAnswersProps> = ({
	stepState,
	totalQuestions,
	requestState,
	resultState,
	questionDataState,
}) => {
	const contents = questionDataState[0][stepState[0]];

	const classes = useStyles();

	const checkUncheck = {
		check: check,
		uncheck: unCheck,
	};

	const theme = useTheme();
	if (theme.palette.type === themeColorsCentral.dark) {
		checkUncheck.check = checkDark;
		checkUncheck.uncheck = unCheckDark;
	}

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
				className={classes.box}
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

					let image = checkUncheck.uncheck;

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
						image = checkUncheck.check;
					}

					// if the user has given the wrong answer then mark it as red
					if (
						userSelectedAnswer === answer &&
						userSelectedAnswer !== contents.answer
					) {
						classNames = classNames + ' ' + classes.wrongAnswer;
						image = checkUncheck.uncheck;
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
