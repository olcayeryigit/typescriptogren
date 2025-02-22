// components/quizPage/QuizPage.tsx
import React from 'react';
import Test from './Test'; // Assuming Test component is responsible for displaying the quiz questions

const QuizPage = ({ quiz }) => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{quiz.title}</h1>
            <p className="text-xl mb-8">{quiz.description}</p>

            {/* Pass the quiz data to the Test component */}
            <Test quiz={quiz} />
        </div>
    );
};

export default QuizPage;
