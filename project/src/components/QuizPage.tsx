import React, { useState } from 'react';
import { Trophy, Star, ArrowRight, RotateCcw, Home, CheckCircle, XCircle } from 'lucide-react';
import { quizQuestions } from '../data/quizData';

interface QuizPageProps {
  onNavigate: (page: string) => void;
}

type Level = 'beginner' | 'intermediate' | 'advanced';

const QuizPage: React.FC<QuizPageProps> = ({ onNavigate }) => {
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  const levels = [
    {
      id: 'beginner' as Level,
      title: 'Beginner',
      description: 'Basic knowledge of Mahabharata characters and events',
      icon: '🌟',
      color: 'from-green-500 to-emerald-600',
      difficulty: 'Easy'
    },
    {
      id: 'intermediate' as Level,
      title: 'Intermediate', 
      description: 'Deeper understanding of stories and moral lessons',
      icon: '⚔️',
      color: 'from-blue-500 to-indigo-600',
      difficulty: 'Medium'
    },
    {
      id: 'advanced' as Level,
      title: 'Advanced',
      description: 'Expert knowledge of philosophy and complex narratives',
      icon: '👑',
      color: 'from-purple-500 to-violet-600',
      difficulty: 'Hard'
    }
  ];

  const currentQuestions = selectedLevel ? quizQuestions[selectedLevel] : [];
  const currentQuestion = currentQuestions[currentQuestionIndex];

  const handleLevelSelect = (level: Level) => {
    setSelectedLevel(level);
    setCurrentQuestionIndex(0);
    setScore(0);
    setUserAnswers([]);
    setQuizCompleted(false);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (!selectedAnswer) return;

    const newUserAnswers = [...userAnswers, selectedAnswer];
    setUserAnswers(newUserAnswers);

    if (selectedAnswer === currentQuestion.correct) {
      setScore(score + 1);
    }

    setShowResult(true);
    
    setTimeout(() => {
      if (currentQuestionIndex < currentQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setQuizCompleted(true);
      }
    }, 2000);
  };

  const resetQuiz = () => {
    setSelectedLevel(null);
    setCurrentQuestionIndex(0);
    setScore(0);
    setUserAnswers([]);
    setQuizCompleted(false);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  const getScoreMessage = () => {
    const percentage = (score / currentQuestions.length) * 100;
    if (percentage >= 90) return { message: "Outstanding! You are a true Mahabharata scholar!", color: "text-green-600" };
    if (percentage >= 70) return { message: "Excellent! You have great knowledge of the epic!", color: "text-blue-600" };
    if (percentage >= 50) return { message: "Good job! Keep learning to deepen your wisdom!", color: "text-yellow-600" };
    return { message: "Keep studying! The path to wisdom requires dedication!", color: "text-orange-600" };
  };

  if (!selectedLevel) {
    return (
      <div className="min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 rounded-full border border-amber-200 mb-6">
              <Trophy className="w-5 h-5 text-amber-700" />
              <span className="text-amber-800 font-medium">Quiz Challenge</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Test Your Knowledge
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your difficulty level and embark on a journey to test your understanding 
              of the world's greatest epic. Each level contains carefully crafted questions 
              to challenge and educate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {levels.map((level) => (
              <div
                key={level.id}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                onClick={() => handleLevelSelect(level.id)}
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${level.color} flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-3xl">{level.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">{level.title}</h3>
                <div className="text-center mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${level.color} text-white`}>
                    {level.difficulty}
                  </span>
                </div>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">{level.description}</p>
                <div className="text-center">
                  <button className={`bg-gradient-to-r ${level.color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 mx-auto`}>
                    <span>Start Quiz</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('home')}
              className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center space-x-2 mx-auto"
            >
              <Home className="w-5 h-5" />
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (quizCompleted) {
    const scoreMessage = getScoreMessage();
    return (
      <div className="min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
            <div className="mb-8">
              <div className="w-32 h-32 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-16 h-16 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Quiz Completed!
              </h1>
              <div className="text-6xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">
                {score}/{currentQuestions.length}
              </div>
              <p className={`text-2xl font-semibold mb-6 ${scoreMessage.color}`}>
                {scoreMessage.message}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{score}</div>
                <div className="text-sm text-blue-500">Correct</div>
              </div>
              <div className="bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-red-600">{currentQuestions.length - score}</div>
                <div className="text-sm text-red-500">Incorrect</div>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{Math.round((score / currentQuestions.length) * 100)}%</div>
                <div className="text-sm text-green-500">Accuracy</div>
              </div>
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-amber-600">{selectedLevel}</div>
                <div className="text-sm text-amber-500">Level</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={resetQuiz}
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 justify-center"
              >
                <RotateCcw className="w-6 h-6" />
                <span>Try Another Level</span>
              </button>
              <button
                onClick={() => onNavigate('home')}
                className="bg-gray-100 text-gray-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition-all duration-300 flex items-center space-x-2 justify-center"
              >
                <Home className="w-6 h-6" />
                <span>Back to Home</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800 capitalize">{selectedLevel} Level</h2>
            <span className="text-lg font-semibold text-gray-600">
              {currentQuestionIndex + 1} / {currentQuestions.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-amber-500 to-orange-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / currentQuestions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 leading-relaxed">
            {currentQuestion?.question}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentQuestion?.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                disabled={showResult}
                className={`p-6 rounded-xl border-2 text-left transition-all duration-300 ${
                  showResult
                    ? option === currentQuestion.correct
                      ? 'bg-green-100 border-green-500 text-green-700'
                      : option === selectedAnswer && option !== currentQuestion.correct
                      ? 'bg-red-100 border-red-500 text-red-700'
                      : 'bg-gray-50 border-gray-200 text-gray-500'
                    : selectedAnswer === option
                    ? 'bg-amber-100 border-amber-500 text-amber-700 shadow-lg'
                    : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-amber-50 hover:border-amber-300 hover:shadow-md'
                }`}
              >
                <div className="flex items-center space-x-3">
                  {showResult && (
                    <div className="flex-shrink-0">
                      {option === currentQuestion.correct ? (
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      ) : option === selectedAnswer && option !== currentQuestion.correct ? (
                        <XCircle className="w-6 h-6 text-red-600" />
                      ) : null}
                    </div>
                  )}
                  <span className="text-lg font-medium">{option}</span>
                </div>
              </button>
            ))}
          </div>

          {showResult && (
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
              <h4 className="text-lg font-bold text-blue-800 mb-2">Explanation:</h4>
              <p className="text-blue-700 leading-relaxed">{currentQuestion.explanation}</p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <button
            onClick={resetQuiz}
            className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center space-x-2"
          >
            <Home className="w-5 h-5" />
            <span>Exit Quiz</span>
          </button>

          <button
            onClick={handleNextQuestion}
            disabled={!selectedAnswer || showResult}
            className={`px-8 py-3 rounded-lg font-bold transition-all duration-300 flex items-center space-x-2 ${
              selectedAnswer && !showResult
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-lg transform hover:scale-105'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <span>{currentQuestionIndex === currentQuestions.length - 1 ? 'Finish Quiz' : 'Next Question'}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;