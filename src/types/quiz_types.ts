export type QuizSettingsPropsType = {
	nameState: [string, (name: string) => void];
	categoryState: [number, (name: number) => void];
	questionsLimitState: [number, (name: number) => void];
	levelState: [string, (name: string) => void];
};

// import React from 'react';
// questions: number;
// category: number;
// setCategory: (category: number) => void;
// setQuestions: (questions: number) => void;
// level: string;
// name: string;
// setSendRequest: React.Dispatch<React.SetStateAction<Boolean>>;
// setName: (name: string) => void;
// setLevel: (level: string) => void;
