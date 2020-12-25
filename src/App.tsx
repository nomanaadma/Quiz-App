import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Header from './components/Header';
import QuizSettings from './components/QuizSettings';

function App() {
	return (
		<Box component="div">
			<Container maxWidth="xl">
				<Header />
				<QuizSettings />
			</Container>
		</Box>
	);
}

export default App;
