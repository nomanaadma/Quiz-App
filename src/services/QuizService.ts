import { Quiz, Question } from '../types/QuizTypes';
import { shuffleAnswers } from '../utils/Common';

// Get Data from API
export const getQuizDetails = async (
	totalQuestions: number,
	category: number,
	level: string
): Promise<Question[]> => {
	const response = await fetch(
		`https://opentdb.com/api.php?amount=${totalQuestions}&category=${category}&difficulty=${level}&type=multiple`
	);

	let { results } = await response.json();

	const quiz: Question[] = results.map(
		(questionObj: Quiz): Question => {
			return {
				userAnswer: '',
				question: questionObj.question,
				answer: questionObj.correct_answer,
				options: shuffleAnswers(
					questionObj.incorrect_answers.concat(
						questionObj.correct_answer
					)
				),
			};
		}
	);

	return quiz;
};
