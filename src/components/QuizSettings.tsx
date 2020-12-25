import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	quizSettings: {},
});

const QuizSettings = () => {
	const classes = useStyles();
	return (
		<section className={classes.quizSettings}>
			<Typography variant="h5">Quiz Options</Typography>
		</section>
	);
};

export default QuizSettings;
