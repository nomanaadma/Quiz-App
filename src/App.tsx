import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Header from './components/Header';
import QuizSettings from './components/QuizSettings';
import QuestionAnswers from './components/QuestionAnswers';
import QuestionAnswersLoader from './components/QuestionAnswersLoader';
import Result from './components/Result';
import { useState } from 'react';
import { Question } from './types/QuizTypes';
import heart from './images/heart.png';

function App() {
	const nameState = useState<string>('');
	const categoryState = useState<number>(9);
	const questionsLimitState = useState<number>(5);
	const levelState = useState<string>('easy');

	const settingState = useState<boolean>(true);
	const loadingState = useState<boolean>(false);
	const resultState = useState<boolean>(false);
	const requestState = useState<boolean>(false);

	const questionDataState = useState<Question[]>([]);

	const stepState = useState<number>(0);

	return (
		<Box component="div">
			<Container maxWidth="xl">
				<Header />
				{settingState[0] && (
					<QuizSettings
						nameState={nameState}
						categoryState={categoryState}
						questionsLimitState={questionsLimitState}
						levelState={levelState}
						loadingState={loadingState}
						settingState={settingState}
						requestState={requestState}
						questionDataState={questionDataState}
					/>
				)}
				{loadingState[0] && <QuestionAnswersLoader />}
				{requestState[0] && (
					<QuestionAnswers
						stepState={stepState}
						requestState={requestState}
						resultState={resultState}
						totalQuestions={questionsLimitState[0]}
						questionDataState={questionDataState}
					/>
				)}
				{resultState[0] && (
					<Result
						levelState={levelState[0]}
						categoryState={categoryState[0]}
						questionDataState={questionDataState}
						setResult={resultState[1]}
						setSetting={settingState[1]}
						setStep={stepState[1]}
					/>
				)}
				<p
					style={{
						textAlign: 'center',
						fontFamily: 'Montserrat',
						margin: 0,
						marginBottom: '28px',
					}}
				>
					Made with
					<img
						src={heart}
						alt="Love"
						style={{
							width: '19px',
							verticalAlign: 'text-bottom',
							margin: '0 5px',
						}}
					/>
					By{' '}
					<a
						href="https://github.com/nomanaadma"
						target="_blank"
						rel="noreferrer"
						style={{
							textDecoration: 'none',
							color: '#476ff5',
						}}
					>
						Noman Shoukat
					</a>
				</p>
			</Container>
		</Box>
	);
}

export default App;
