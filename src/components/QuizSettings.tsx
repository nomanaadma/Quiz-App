import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { QuizSettingsPropsType } from '../types/QuizTypes';
import {
	TextField,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	Button,
	Paper,
	Container,
} from '@material-ui/core';
import { QuestionType } from '../types/QuizTypes';
import { getQuizDetails } from '../services/QuizService';

const useStyles = makeStyles({
	quizSettings: {
		marginTop: '30px',
		marginBottom: '30px',
		padding: '20px',
		borderRadius: '20px',
	},
	field: {
		marginBottom: '20px',
	},
	heading: {
		marginBottom: '20px',
		textAlign: 'center',
	},
	button: {
		display: 'block',
		margin: '0 auto',
		marginBottom: '6px',
	},
});

const QuizSettings: React.FC<QuizSettingsPropsType> = ({
	nameState,
	categoryState,
	questionsLimitState,
	levelState,
	loadingState,
	settingState,
	requestState,
	questionDataState,
}) => {
	const classes = useStyles();
	return (
		<Container maxWidth="sm">
			<Paper className={classes.quizSettings} elevation={0}>
				<Typography variant="h5" className={classes.heading}>
					Quiz Options
				</Typography>
				<form
					onSubmit={async (e: React.FormEvent<EventTarget>) => {
						e.preventDefault();
						settingState[1](false);
						loadingState[1](true);

						const QuestionData: QuestionType[] = await getQuizDetails(
							questionsLimitState[0],
							categoryState[0],
							levelState[0]
						);

						loadingState[1](false);
						requestState[1](true);

						questionDataState[1](QuestionData);

						console.log(QuestionData);
					}}
				>
					<FormControl
						className={`form-control ${classes.field}`}
						variant="outlined"
						fullWidth
					>
						<TextField
							required
							id="outlined-basic"
							label="Your Name"
							variant="outlined"
							value={nameState[0]}
							onChange={e => nameState[1](e.target.value)}
						/>
					</FormControl>
					<FormControl
						className={`form-control ${classes.field}`}
						variant="outlined"
						fullWidth
					>
						<InputLabel
							aria-label="category-label"
							className="form-label"
							id="demo-simple-select-outlined-label-category"
						>
							Category
						</InputLabel>
						<Select
							labelId="demo-simple-select-outlined-label-category"
							id="demo-simple-select-outlined-category"
							value={categoryState[0]}
							defaultValue={categoryState[0]}
							onChange={event =>
								categoryState[1](Number(event.target.value))
							}
							required
							label="Category"
						>
							<MenuItem className="form-menu-item" value={9}>
								General Knowledge
							</MenuItem>
							<MenuItem className="form-menu-item" value={11}>
								Movies
							</MenuItem>
							<MenuItem className="form-menu-item" value={17}>
								Science
							</MenuItem>
							<MenuItem className="form-menu-item" value={18}>
								Computers
							</MenuItem>
							<MenuItem className="form-menu-item" value={19}>
								Mathematics
							</MenuItem>
							<MenuItem className="form-menu-item" value={21}>
								Sports
							</MenuItem>
						</Select>
					</FormControl>
					<FormControl
						className={`form-control ${classes.field}`}
						variant="outlined"
						fullWidth
					>
						<InputLabel
							className="form-label"
							id="demo-simple-select-outlined-label-questions"
						>
							Questions
						</InputLabel>
						<Select
							labelId="demo-simple-select-outlined-label-questions"
							id="demo-simple-select-outlined-questions"
							value={questionsLimitState[0]}
							onChange={event =>
								questionsLimitState[1](
									Number(event.target.value)
								)
							}
							required
							label="Questions"
						>
							<MenuItem value={5}>Five</MenuItem>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={15}>Fifteen</MenuItem>
						</Select>
					</FormControl>

					<FormControl
						className={`form-control ${classes.field}`}
						variant="outlined"
						fullWidth
					>
						<InputLabel
							className="form-label"
							id="demo-simple-select-outlined-label-difficulty"
						>
							Difficulty
						</InputLabel>
						<Select
							labelId="demo-simple-select-outlined-label-difficulty"
							id="demo-simple-select-outlined-difficulty"
							value={levelState[0]}
							onChange={event =>
								levelState[1](event.target.value as string)
							}
							required
							label="Questions"
						>
							<MenuItem value="easy">Easy</MenuItem>
							<MenuItem value="medium">Medium</MenuItem>
							<MenuItem value="hard">Hard</MenuItem>
						</Select>
					</FormControl>
					<Button
						variant="contained"
						color="primary"
						type="submit"
						className={classes.button}
					>
						Start Quiz
					</Button>
				</form>
			</Paper>
		</Container>
	);
};

export default QuizSettings;
