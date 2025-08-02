import React from 'react';
import { Check, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Question } from '../data/questions';

interface QuizCardProps {
  question: Question;
  currentQuestion: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  showResult: boolean;
  onAnswerSelect: (answerIndex: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  onContinue: () => void;
  isFirstQuestion: boolean;
  isLastQuestion: boolean;
}

export function QuizCard({
  question,
  currentQuestion,
  totalQuestions,
  selectedAnswer,
  showResult,
  onAnswerSelect,
  onNext,
  onPrevious,
  onContinue,
  isFirstQuestion,
  isLastQuestion
}: QuizCardProps) {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
            {question.category}
          </span>
          <span className="text-sm opacity-90">
            {currentQuestion} of {totalQuestions}
          </span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-2 mb-4">
          <div 
            className="bg-white h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
          />
        </div>
        <h2 className="text-xl font-semibold leading-relaxed">
          {question.question}
        </h2>
      </div>

      {/* Answer Options */}
      <div className="p-8">
        <div className="space-y-4 mb-8">
          {question.options.map((option, index) => {
            let buttonClass = "w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ";
            
            if (showResult) {
              if (index === question.correct) {
                buttonClass += "border-green-500 bg-green-50 text-green-800";
              } else if (index === selectedAnswer && index !== question.correct) {
                buttonClass += "border-red-500 bg-red-50 text-red-800";
              } else {
                buttonClass += "border-gray-200 bg-gray-50 text-gray-600";
              }
            } else {
              if (selectedAnswer === index) {
                buttonClass += "border-green-500 bg-green-50 text-green-800 shadow-md";
              } else {
                buttonClass += "border-gray-200 hover:border-green-300 hover:bg-green-50 hover:shadow-md";
              }
            }

            return (
              <button
                key={index}
                className={buttonClass}
                onClick={() => onAnswerSelect(index)}
                disabled={showResult}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{option}</span>
                  {showResult && (
                    <div className="flex-shrink-0 ml-4">
                      {index === question.correct ? (
                        <Check className="w-5 h-5 text-green-600" />
                      ) : index === selectedAnswer ? (
                        <X className="w-5 h-5 text-red-600" />
                      ) : null}
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showResult && (
          <div className="mb-8 p-6 bg-blue-50 border border-blue-200 rounded-xl">
            <h3 className="font-semibold text-blue-900 mb-2">Explanation</h3>
            <p className="text-blue-800 leading-relaxed">{question.explanation}</p>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={onPrevious}
            disabled={isFirstQuestion}
            className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
              isFirstQuestion
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
            }`}
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Previous
          </button>

          {showResult ? (
            <button
              onClick={onContinue}
              className="flex items-center px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              {isLastQuestion ? 'View Results' : 'Continue'}
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          ) : (
            <button
              onClick={onNext}
              disabled={selectedAnswer === null}
              className={`flex items-center px-8 py-3 rounded-xl font-medium transition-all duration-200 shadow-md ${
                selectedAnswer !== null
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 hover:shadow-lg'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Submit Answer
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}