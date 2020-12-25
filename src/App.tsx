import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Header from './components/Header';
import QuizSettings from './components/QuizSettings';
import QuestionAnswers from './components/QuestionAnswers';
import Result from './components/Result';
import { useState } from 'react';

function App() {
	const nameState = useState<string>('');
	const categoryState = useState<number>(9);
	const questionsLimitState = useState<number>(5);
	const levelState = useState<string>('easy');

	return (
		<Box component="div">
			<Container maxWidth="xl">
				<Header />
				<QuizSettings
					nameState={nameState}
					categoryState={categoryState}
					questionsLimitState={questionsLimitState}
					levelState={levelState}
				/>
				<QuestionAnswers />
				<Result />
			</Container>
		</Box>
	);
}

export default App;
