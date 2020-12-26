import { QuestionType } from '../types/QuizTypes';

export const primaryButton = {
	backgroundColor: '#476ff5',
	borderRadius: '8px',
	padding: '10px 52px',
	fontFamily: 'Montserrat',
	letterSpacing: '2px',
	fontSize: '12px',
	fontWeight: 600,
};

export const getScore = (data: QuestionType[]): number => {
	let score = 0;

	for (const questionObj of data)
		if (questionObj.userAnswer === questionObj.answer) score++;

	return score;
};
