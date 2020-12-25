export type UserAnswerType = {
	step: number;
	answer: string;
};

export type QuestionType = {
	question: string;
	answer: string;
	options: string[];
};

export type QuizSettingsPropsType = {
	nameState: [string, React.Dispatch<React.SetStateAction<string>>];
	categoryState: [number, React.Dispatch<React.SetStateAction<number>>];
	questionsLimitState: [number, React.Dispatch<React.SetStateAction<number>>];
	levelState: [string, React.Dispatch<React.SetStateAction<string>>];
	loadingState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
	settingState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
	requestState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
	questionDataState: [
		QuestionType[],
		React.Dispatch<React.SetStateAction<QuestionType[]>>
	];
	userAnswerState: [
		UserAnswerType[],
		React.Dispatch<React.SetStateAction<UserAnswerType[]>>
	];
};

export type Quiz = {
	category: string;
	correct_answer: string;
	difficulty: string;
	incorrect_answers: string[];
	question: string;
	type: string;
};

export type QuestionAnswersPropsType = {
	stepState: [number, React.Dispatch<React.SetStateAction<number>>];
	requestState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
	resultState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
	totalQuestions: number;
	contents: QuestionType;
	userAnswerState: [
		UserAnswerType[],
		React.Dispatch<React.SetStateAction<UserAnswerType[]>>
	];
};
