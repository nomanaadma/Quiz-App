import { Question, themeColorType } from '../types/QuizTypes';

export const primaryButton = {
	backgroundColor: '#476ff5',
	borderRadius: '8px',
	padding: '10px 52px',
	fontFamily: 'Montserrat',
	letterSpacing: '2px',
	fontSize: '12px',
	fontWeight: 600,
};

export const getScore = (data: Question[]): number => {
	let score = 0;

	for (const questionObj of data)
		if (questionObj.userAnswer === questionObj.answer) score++;

	return score;
};

// Shuffle Answers functions
export const shuffleAnswers = (array: any[]) =>
	[...array].sort(() => Math.random() - 0.5);

export const themeColorsCentral: themeColorType = {
	dark: 'dark',
	light: 'light',
	paperDark: '#282c34',
	paperLight: '#fff',
	typoDark: '#fff',
	typoLight: '#000',
	boxLight: '#fff',
	boxDark: '#2b303a',
	skeletonLight: ['#f3f4f8', '#f3f4f8', '#ffffff78', '#f3f4f8'],
	skeletonDark: ['#3c424f', '#272b3817', '#2f323e7a', '#272b3817'],
	answerLight: '#e5e8ef',
	answerDark: '#464d5b',
	bodyDark: '#20232a',
	bodyLight: '#84899f29',
	switchDark: ['#6e40c9', '#3c1e70', '#271052'],
	switchLight: ['#2f363d', '#d1d5da', 'inherit'],
};
