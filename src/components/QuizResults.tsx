import React from 'react';
import { Trophy, Target, BookOpen, RotateCcw, Home } from 'lucide-react';

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  incorrectAnswers: number;
  onRestart: () => void;
  onHome: () => void;
}

export function QuizResults({ 
  score, 
  totalQuestions, 
  correctAnswers, 
  incorrectAnswers, 
  onRestart, 
  onHome 
}: QuizResultsProps) {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getPerformanceMessage = () => {
    if (percentage >= 90) return "Excellent! You're a Spring Boot expert! 🎉";
    if (percentage >= 80) return "Great job! You have strong Spring Boot knowledge! 👏";
    if (percentage >= 70) return "Good work! Keep practicing to improve further! 📚";
    if (percentage >= 60) return "Not bad! There's room for improvement! 💪";
    return "Keep studying! Practice makes perfect! 📖";
  };

  const getPerformanceColor = () => {
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-8 text-center">
        <Trophy className="w-16 h-16 mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-2">Quiz Complete!</h1>
        <p className="text-xl opacity-90">{getPerformanceMessage()}</p>
      </div>

      {/* Results */}
      <div className="p-8">
        {/* Score Circle */}
        <div className="text-center mb-8">
          <div className="relative inline-flex items-center justify-center w-32 h-32 mb-4">
            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                className="text-gray-200"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                strokeDasharray={`${2 * Math.PI * 40}`}
                strokeDashoffset={`${2 * Math.PI * 40 * (1 - percentage / 100)}`}
                className={getPerformanceColor()}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className={`text-3xl font-bold ${getPerformanceColor()}`}>
                {percentage}%
              </span>
            </div>
          </div>
          <p className="text-gray-600 text-lg">Overall Score</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
            <Target className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-green-800 mb-1">{correctAnswers}</div>
            <div className="text-green-600 font-medium">Correct Answers</div>
          </div>
          
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
            <BookOpen className="w-8 h-8 text-red-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-red-800 mb-1">{incorrectAnswers}</div>
            <div className="text-red-600 font-medium">Incorrect Answers</div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
            <Trophy className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <div className="text-2xl font-bold text-blue-800 mb-1">{totalQuestions}</div>
            <div className="text-blue-600 font-medium">Total Questions</div>
          </div>
        </div>

        {/* Performance Breakdown */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Performance Breakdown</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Accuracy Rate</span>
              <span className={`font-semibold ${getPerformanceColor()}`}>{percentage}%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Questions Answered</span>
              <span className="font-semibold text-gray-800">{totalQuestions}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Success Rate</span>
              <span className="font-semibold text-gray-800">
                {correctAnswers}/{totalQuestions}
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onRestart}
            className="flex items-center justify-center px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Try Again
          </button>
          
          <button
            onClick={onHome}
            className="flex items-center justify-center px-8 py-3 bg-gray-600 text-white rounded-xl font-medium hover:bg-gray-700 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}