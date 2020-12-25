import Skeleton from 'react-loading-skeleton';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	container: {
		backgroundColor: '#fff',
		borderRadius: '20px',
		padding: '20px',
		margin: '30px 0',
	},
	button: {
		display: 'grid',
		gridGap: '12px',
		gridTemplateColumns: '1fr 1fr',
	},
});

const QuestionAnswersLoader = () => {
	const classes = useStyles();
	return (
		<Container maxWidth="sm">
			<div className={classes.container}>
				<Skeleton height={100} style={{ marginBottom: '8px' }} />
				<Skeleton
					count={4}
					height={40}
					style={{ marginBottom: '8px' }}
				/>
				<div className={classes.button}>
					<Skeleton height={30} />
					<Skeleton height={30} />
				</div>
			</div>
		</Container>
	);
};

export default QuestionAnswersLoader;
