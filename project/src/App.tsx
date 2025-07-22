import React, { useState } from 'react';
import { BookOpen, Trophy, Gamepad2, Home, Menu, X } from 'lucide-react';
import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';
import GamePage from './components/GamePage';
import LessonsPage from './components/LessonsPage';

type Page = 'home' | 'quiz' | 'game' | 'lessons';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'quiz', label: 'Quiz Challenge', icon: Trophy },
    { id: 'game', label: 'Epic Game', icon: Gamepad2 },
    { id: 'lessons', label: 'Sacred Lessons', icon: BookOpen },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'quiz':
        return <QuizPage onNavigate={setCurrentPage} />;
      case 'game':
        return <GamePage onNavigate={setCurrentPage} />;
      case 'lessons':
        return <LessonsPage onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Navigation */}
      <nav className="bg-gradient-to-r from-amber-900 via-orange-900 to-yellow-900 shadow-2xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                <BookOpen className="w-6 h-6 text-amber-900" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-yellow-100">Mahabharata</h1>
                <p className="text-xs text-yellow-200">Epic Wisdom</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id as Page)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      currentPage === item.id
                        ? 'bg-yellow-500 text-amber-900 shadow-lg'
                        : 'text-yellow-100 hover:bg-amber-800 hover:text-yellow-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-yellow-100 hover:text-yellow-50 p-2"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-amber-800 border-t border-amber-700">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id as Page);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left transition-all duration-200 ${
                    currentPage === item.id
                      ? 'bg-yellow-500 text-amber-900'
                      : 'text-yellow-100 hover:bg-amber-700'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-amber-900 via-orange-900 to-yellow-900 text-yellow-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg font-medium mb-2">
            "The greatest victory is the victory over oneself"
          </p>
          <p className="text-yellow-200 text-sm">
            - Wisdom from the Mahabharata
          </p>
          <div className="mt-4 pt-4 border-t border-amber-700">
            <p className="text-xs text-yellow-300">
              © 2025 Mahabharata Epic Wisdom. Preserving ancient wisdom for modern minds.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;