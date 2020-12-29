import { Container, Typography, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ResultProps } from '../types/QuizTypes';
import { Categories } from '../services/QuizCategories';
import { primaryButton, getScore, themeColorsCentral } from '../utils/Common';

const useStyles = makeStyles(theme => {
	const type = theme.palette.type;

	const styles = {
		heading: {
			marginBottom: '30px',
			textAlign: 'center' as 'center',
			fontFamily: 'Roboto Slab',
		},
		resultContainer: {
			display: 'grid',
			gridGap: '16px',
			gridTemplateColumns: '1fr 1fr',
		},
		propertyContent: {
			textAlign: 'right' as 'right',
			fontFamily: 'Montserrat',
			fontWeight: 600,
		},
		propertyHeading: {
			fontFamily: 'Montserrat',
			fontWeight: 600,
		},
		button: {
			textAlign: 'center' as 'center',
			margin: '30px 0 10px',
		},
		buttonEl: {
			...primaryButton,
			backgroundColor: '#cd3a28',
		},
		box: {
			backgroundColor: themeColorsCentral.boxLight,
		},
	};

	if (type === themeColorsCentral.dark) {
		styles.box.backgroundColor = themeColorsCentral.boxDark;
	}

	return styles;
});

const Result: React.FC<ResultProps> = ({
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
			<Box
				className={classes.box}
				borderRadius={20}
				my={'30px'}
				p={'20px'}
			>
				<Typography variant="h5" className={classes.heading}>
					Result
				</Typography>
				<div className={classes.resultContainer}>
					<Typography
						variant="subtitle2"
						className={classes.propertyHeading}
					>
						Name
					</Typography>
					<Typography
						variant="subtitle2"
						className={classes.propertyContent}
					>
						Noman
					</Typography>
					<Typography
						variant="subtitle2"
						className={classes.propertyHeading}
					>
						Total Questions
					</Typography>
					<Typography
						variant="subtitle2"
						className={classes.propertyContent}
					>
						{data[0].length}
					</Typography>
					<Typography
						variant="subtitle2"
						className={classes.propertyHeading}
					>
						Score
					</Typography>
					<Typography
						variant="subtitle2"
						className={classes.propertyContent}
					>
						{getScore(data[0])}
					</Typography>
					<Typography
						variant="subtitle2"
						className={classes.propertyHeading}
					>
						Percentage
					</Typography>
					<Typography
						variant="subtitle2"
						className={classes.propertyContent}
					>
						{(getScore(data[0]) / data[0].length) * 100}%
					</Typography>
					<Typography
						variant="subtitle2"
						className={classes.propertyHeading}
					>
						Difficulty Level
					</Typography>
					<Typography
						variant="subtitle2"
						className={classes.propertyContent}
					>
						{levelState.toUpperCase()}
					</Typography>
					<Typography
						variant="subtitle2"
						className={classes.propertyHeading}
					>
						Category
					</Typography>
					<Typography
						variant="subtitle2"
						className={classes.propertyContent}
					>
						{Categories[categoryState]}
					</Typography>
				</div>
				<div className={classes.button}>
					<Button
						className={classes.buttonEl}
						variant="contained"
						color="secondary"
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
			</Box>
		</Container>
	);
};

export default Result;
