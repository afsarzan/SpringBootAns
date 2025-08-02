import React, { useState, useEffect } from 'react';
import { questions, categories, Question } from './data/questions';
import { CategorySelector } from './components/CategorySelector';
import { QuizCard } from './components/QuizCard';
import { QuizResults } from './components/QuizResults';

type QuizState = 'category-selection' | 'quiz' | 'results';

interface UserAnswer {
  questionId: number;
  selectedAnswer: number;
  isCorrect: boolean;
}

function App() {
  const [quizState, setQuizState] = useState<QuizState>('category-selection');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  // Initialize with all categories selected
  useEffect(() => {
    setSelectedCategories([...categories]);
  }, []);

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleSelectAll = () => {
    setSelectedCategories([...categories]);
  };

  const handleDeselectAll = () => {
    setSelectedCategories([]);
  };

  const handleStartQuiz = () => {
    if (selectedCategories.length === 0) return;
    
    const filtered = questions.filter(q => selectedCategories.includes(q.category));
    // Shuffle questions for variety
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    
    setFilteredQuestions(shuffled);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setSelectedAnswer(null);
    setShowResult(false);
    setQuizState('quiz');
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const currentQuestion = filteredQuestions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correct;
    
    const newAnswer: UserAnswer = {
      questionId: currentQuestion.id,
      selectedAnswer,
      isCorrect
    };

    setUserAnswers(prev => [...prev, newAnswer]);
    setShowResult(true);
  };

  const handleContinue = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizState('results');
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setSelectedAnswer(null);
      setShowResult(false);
      // Remove the last answer from userAnswers
      setUserAnswers(prev => prev.slice(0, -1));
    }
  };

  const handleRestart = () => {
    setQuizState('category-selection');
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const handleHome = () => {
    setQuizState('category-selection');
  };

  const calculateResults = () => {
    const correctAnswers = userAnswers.filter(answer => answer.isCorrect).length;
    const incorrectAnswers = userAnswers.length - correctAnswers;
    const score = correctAnswers;
    
    return {
      score,
      totalQuestions: filteredQuestions.length,
      correctAnswers,
      incorrectAnswers
    };
  };

  if (quizState === 'category-selection') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-8 px-4">
        <CategorySelector
          categories={categories}
          selectedCategories={selectedCategories}
          onCategoryToggle={handleCategoryToggle}
          onSelectAll={handleSelectAll}
          onDeselectAll={handleDeselectAll}
          onStartQuiz={handleStartQuiz}
        />
      </div>
    );
  }

  if (quizState === 'quiz') {
    const currentQuestion = filteredQuestions[currentQuestionIndex];
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-8 px-4">
        <QuizCard
          question={currentQuestion}
          currentQuestion={currentQuestionIndex + 1}
          totalQuestions={filteredQuestions.length}
          selectedAnswer={selectedAnswer}
          showResult={showResult}
          onAnswerSelect={handleAnswerSelect}
          onNext={handleNext}
          onPrevious={handlePrevious}
          onContinue={handleContinue}
          isFirstQuestion={currentQuestionIndex === 0}
          isLastQuestion={currentQuestionIndex === filteredQuestions.length - 1}
        />
      </div>
    );
  }

  if (quizState === 'results') {
    const results = calculateResults();
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-8 px-4">
        <QuizResults
          {...results}
          onRestart={handleRestart}
          onHome={handleHome}
        />
      </div>
    );
  }

  return null;
}

export default App;