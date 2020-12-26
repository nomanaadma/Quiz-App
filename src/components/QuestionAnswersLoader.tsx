import Skeleton from 'react-loading-skeleton';
import { Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
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
			<Box
				style={{ backgroundColor: '#fff' }}
				borderRadius={20}
				my={'30px'}
				p={'20px'}
			>
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
			</Box>
		</Container>
	);
};

export default QuestionAnswersLoader;
