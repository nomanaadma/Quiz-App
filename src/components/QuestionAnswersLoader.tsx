import Skeleton from 'react-loading-skeleton';
import { Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => {
	const type = theme.palette.type;

	const styles = {
		button: {
			display: 'grid',
			gridGap: '12px',
			gridTemplateColumns: '1fr 1fr',
		},
		box: {
			backgroundColor: '#fff',
		},
		skeleton: {
			backgroundColor: '#f3f4f8 !important',
			backgroundImage:
				'linear-gradient( 90deg,#f3f4f8,#ffffff78,#f3f4f8 ) !important',
		},
	};

	if (type === 'dark') {
		styles.box.backgroundColor = '#2b303a';
		styles.skeleton.backgroundColor = '#3c424f !important';
		styles.skeleton.backgroundImage =
			'linear-gradient( 90deg,#272b3817,#2f323e7a,#272b3817 ) !important';
	}

	return styles;
});

const QuestionAnswersLoader = () => {
	const classes = useStyles();
	return (
		<Container maxWidth="sm">
			<Box
				className={classes.box}
				borderRadius={20}
				my={'30px'}
				p={'20px'}
			>
				<Skeleton
					height={100}
					style={{ marginBottom: '8px' }}
					className={classes.skeleton}
				/>
				<Skeleton
					count={4}
					height={40}
					style={{ marginBottom: '8px' }}
					className={classes.skeleton}
				/>
				<div className={classes.button}>
					<Skeleton height={30} className={classes.skeleton} />
					<Skeleton height={30} className={classes.skeleton} />
				</div>
			</Box>
		</Container>
	);
};

export default QuestionAnswersLoader;
