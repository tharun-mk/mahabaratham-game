import React, { useState, useEffect } from 'react';
import { Shuffle, Trophy, RotateCcw, Home, Star, Clock } from 'lucide-react';
import { characters } from '../data/gameData';

interface GamePageProps {
  onNavigate: (page: string) => void;
}

const GamePage: React.FC<GamePageProps> = ({ onNavigate }) => {
  const [gameType, setGameType] = useState<'memory' | 'match' | null>(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes
  const [gameActive, setGameActive] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  
  // Memory Game State
  const [cards, setCards] = useState<Array<{id: number, character: any, flipped: boolean, matched: boolean}>>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  
  // Character Match Game State
  const [currentCharacter, setCurrentCharacter] = useState<any>(null);
  const [options, setOptions] = useState<any[]>([]);
  const [lives, setLives] = useState(3);

  // Timer Effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameActive && timeLeft > 0 && !gameCompleted) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0) {
      setGameActive(false);
      setGameCompleted(true);
    }
    return () => clearTimeout(timer);
  }, [gameActive, timeLeft, gameCompleted]);

  const initializeMemoryGame = () => {
    const shuffledCharacters = [...characters].sort(() => 0.5 - Math.random()).slice(0, 8);
    const gameCards = [];
    shuffledCharacters.forEach((char, index) => {
      gameCards.push(
        { id: index * 2, character: char, flipped: false, matched: false },
        { id: index * 2 + 1, character: char, flipped: false, matched: false }
      );
    });
    setCards(gameCards.sort(() => 0.5 - Math.random()));
    setGameType('memory');
    setGameActive(true);
    setScore(0);
    setTimeLeft(120);
    setGameCompleted(false);
    setFlippedCards([]);
  };

  const initializeMatchGame = () => {
    setGameType('match');
    setGameActive(true);
    setScore(0);
    setTimeLeft(120);
    setGameCompleted(false);
    setLives(3);
    generateNewQuestion();
  };

  const generateNewQuestion = () => {
    const correctChar = characters[Math.floor(Math.random() * characters.length)];
    const wrongOptions = characters
      .filter(char => char.name !== correctChar.name)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    
    const allOptions = [correctChar, ...wrongOptions].sort(() => 0.5 - Math.random());
    
    setCurrentCharacter(correctChar);
    setOptions(allOptions);
  };

  const handleCardFlip = (cardId: number) => {
    if (flippedCards.length === 2 || cards[cardId].flipped || cards[cardId].matched) return;
    
    const newCards = [...cards];
    newCards[cardId].flipped = true;
    setCards(newCards);
    
    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);
    
    if (newFlippedCards.length === 2) {
      const [firstId, secondId] = newFlippedCards;
      if (cards[firstId].character.name === cards[secondId].character.name) {
        // Match found
        setTimeout(() => {
          const updatedCards = [...newCards];
          updatedCards[firstId].matched = true;
          updatedCards[secondId].matched = true;
          setCards(updatedCards);
          setFlippedCards([]);
          setScore(score + 10);
          
          // Check if game is won
          if (updatedCards.every(card => card.matched)) {
            setGameCompleted(true);
            setGameActive(false);
          }
        }, 1000);
      } else {
        // No match
        setTimeout(() => {
          const updatedCards = [...newCards];
          updatedCards[firstId].flipped = false;
          updatedCards[secondId].flipped = false;
          setCards(updatedCards);
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const handleCharacterGuess = (selectedChar: any) => {
    if (selectedChar.name === currentCharacter.name) {
      setScore(score + 10);
      generateNewQuestion();
    } else {
      setLives(lives - 1);
      if (lives <= 1) {
        setGameCompleted(true);
        setGameActive(false);
      }
    }
  };

  const resetGame = () => {
    setGameType(null);
    setScore(0);
    setTimeLeft(120);
    setGameActive(false);
    setGameCompleted(false);
    setCards([]);
    setFlippedCards([]);
    setLives(3);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!gameType) {
    return (
      <div className="min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-violet-100 px-4 py-2 rounded-full border border-purple-200 mb-6">
              <Trophy className="w-5 h-5 text-purple-700" />
              <span className="text-purple-800 font-medium">Epic Games</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Interactive Adventures
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Test your knowledge and memory with exciting games based on Mahabharata characters 
              and stories. Challenge yourself and have fun while learning!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">Memory Challenge</h3>
              <p className="text-gray-600 text-center mb-6 leading-relaxed">
                Test your memory by matching pairs of Mahabharata characters. Flip cards to find 
                matching pairs and complete the challenge before time runs out!
              </p>
              <div className="text-center">
                <button
                  onClick={initializeMemoryGame}
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Start Memory Game
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shuffle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">Character Match</h3>
              <p className="text-gray-600 text-center mb-6 leading-relaxed">
                Read character descriptions and select the correct character from the options. 
                Test your knowledge of Mahabharata heroes, villains, and supporting characters!
              </p>
              <div className="text-center">
                <button
                  onClick={initializeMatchGame}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Start Matching Game
                </button>
              </div>
            </div>
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

  if (gameCompleted) {
    return (
      <div className="min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl p-12 text-center">
            <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Trophy className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {gameType === 'memory' ? 'Memory Challenge Complete!' : 'Character Match Complete!'}
            </h1>
            <div className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent mb-6">
              {score} Points
            </div>
            <p className="text-xl text-gray-600 mb-8">
              {score >= 50 ? 'Outstanding performance! You truly know the epic well!' :
               score >= 30 ? 'Great job! Your knowledge is impressive!' :
               'Good effort! Keep playing to improve your skills!'}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={resetGame}
                className="bg-gradient-to-r from-purple-500 to-violet-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 justify-center"
              >
                <RotateCcw className="w-6 h-6" />
                <span>Play Again</span>
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

  // Memory Game UI
  if (gameType === 'memory') {
    return (
      <div className="min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Game Stats */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex justify-between items-center flex-wrap gap-4">
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{score}</div>
                  <div className="text-sm text-gray-500">Score</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 flex items-center justify-center">
                    <Clock className="w-6 h-6 mr-1" />
                    {formatTime(timeLeft)}
                  </div>
                  <div className="text-sm text-gray-500">Time Left</div>
                </div>
              </div>
              <button
                onClick={resetGame}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300"
              >
                Exit Game
              </button>
            </div>
          </div>

          {/* Memory Cards Grid */}
          <div className="grid grid-cols-4 gap-4">
            {cards.map((card, index) => (
              <div
                key={card.id}
                onClick={() => handleCardFlip(index)}
                className={`aspect-square rounded-xl cursor-pointer transform transition-all duration-500 ${
                  card.flipped || card.matched 
                    ? 'rotate-y-180' 
                    : 'hover:scale-105'
                }`}
              >
                {card.flipped || card.matched ? (
                  <div className={`w-full h-full rounded-xl p-4 flex flex-col items-center justify-center text-center ${
                    card.matched 
                      ? 'bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-300' 
                      : 'bg-gradient-to-r from-blue-100 to-indigo-100 border-2 border-blue-300'
                  }`}>
                    <div className="text-2xl mb-2">{card.character.emoji}</div>
                    <div className="font-bold text-sm text-gray-700">{card.character.name}</div>
                  </div>
                ) : (
                  <div className="w-full h-full rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
                    <div className="text-white text-3xl">🏛️</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Character Match Game UI
  if (gameType === 'match') {
    return (
      <div className="min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Game Stats */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex justify-between items-center flex-wrap gap-4">
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{score}</div>
                  <div className="text-sm text-gray-500">Score</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 flex items-center justify-center">
                    <Clock className="w-6 h-6 mr-1" />
                    {formatTime(timeLeft)}
                  </div>
                  <div className="text-sm text-gray-500">Time Left</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600">{'❤️'.repeat(lives)}</div>
                  <div className="text-sm text-gray-500">Lives</div>
                </div>
              </div>
              <button
                onClick={resetGame}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300"
              >
                Exit Game
              </button>
            </div>
          </div>

          {/* Question Card */}
          {currentCharacter && (
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Who is this character?</h2>
                <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 rounded-xl">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {currentCharacter.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleCharacterGuess(option)}
                    className="p-6 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-gray-200 hover:from-green-50 hover:to-emerald-50 hover:border-green-300 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="text-center">
                      <div className="text-3xl mb-2">{option.emoji}</div>
                      <div className="text-xl font-bold text-gray-800">{option.name}</div>
                      <div className="text-sm text-gray-600 mt-1">{option.role}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
};

export default GamePage;