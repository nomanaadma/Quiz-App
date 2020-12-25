import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Header from './components/Header';
import QuizSettings from './components/QuizSettings';
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
					// setName={nameState}
					// questions={questions}
					// setQuestions={setQuestions}
					// level={level}
					// category={category}
					// setCategory={setCategory}
					// setLevel={setLevel}
				/>
			</Container>
		</Box>
	);
}

export default App;
