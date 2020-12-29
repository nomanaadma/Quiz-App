import Skeleton from 'react-loading-skeleton';
import { Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { themeColorsCentral } from '../utils/Common';

const useStyles = makeStyles(theme => {
	const type = theme.palette.type;

	const styles = {
		button: {
			display: 'grid',
			gridGap: '12px',
			gridTemplateColumns: '1fr 1fr',
		},
		box: {
			backgroundColor: themeColorsCentral.boxLight,
		},
		skeleton: {
			backgroundColor: `${themeColorsCentral.skeletonLight[0]} !important`,
			backgroundImage: `linear-gradient( 90deg,${themeColorsCentral.skeletonLight[1]},${themeColorsCentral.skeletonLight[2]},${themeColorsCentral.skeletonLight[3]} ) !important`,
		},
	};

	if (type === themeColorsCentral.dark) {
		styles.box.backgroundColor = themeColorsCentral.boxDark;
		styles.skeleton.backgroundColor = `${themeColorsCentral.skeletonDark[0]} !important`;
		styles.skeleton.backgroundImage = `linear-gradient( 90deg,${themeColorsCentral.skeletonDark[1]},${themeColorsCentral.skeletonDark[2]},${themeColorsCentral.skeletonDark[3]} ) !important`;
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
