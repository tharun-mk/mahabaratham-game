import React from 'react';
import { Trophy, Gamepad2, BookOpen, Sparkles, Users, Heart, Shield, Crown } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const lessons = [
    {
      title: "Dharma Above All",
      description: "The importance of righteousness and moral duty in all aspects of life.",
      icon: Shield,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Unity in Diversity",
      description: "Despite differences, working together towards common goals brings strength.",
      icon: Users,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Consequences of Actions",
      description: "Every action has consequences that ripple through time and generations.",
      icon: Sparkles,
      color: "from-purple-500 to-violet-600"
    },
    {
      title: "Leadership & Sacrifice",
      description: "True leadership requires sacrifice and putting others' welfare before one's own.",
      icon: Crown,
      color: "from-amber-500 to-orange-600"
    },
    {
      title: "Love & Devotion",
      description: "The power of unconditional love and devotion in overcoming life's challenges.",
      icon: Heart,
      color: "from-rose-500 to-pink-600"
    },
    {
      title: "Knowledge & Wisdom",
      description: "True wisdom comes from understanding the deeper truths of existence.",
      icon: BookOpen,
      color: "from-teal-500 to-cyan-600"
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-900 via-orange-900 to-yellow-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-yellow-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-400/30">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span className="text-yellow-100 font-medium">Epic Wisdom Awaits</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-yellow-200 via-amber-200 to-orange-200 bg-clip-text text-transparent">
                Mahabharata
              </span>
              <br />
              <span className="text-white">Epic Journey</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-yellow-100 max-w-3xl mx-auto leading-relaxed">
              Discover the timeless wisdom of the world's greatest epic. Test your knowledge, 
              play interactive games, and learn profound life lessons that transcend centuries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <button
                onClick={() => onNavigate('quiz')}
                className="bg-gradient-to-r from-yellow-500 to-amber-500 text-amber-900 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <Trophy className="w-6 h-6" />
                <span>Start Quiz Challenge</span>
              </button>
              
              <button
                onClick={() => onNavigate('game')}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:bg-white/20 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <Gamepad2 className="w-6 h-6" />
                <span>Play Epic Game</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-400/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-amber-400/10 rounded-full animate-pulse delay-500"></div>
      </section>

      {/* Sacred Lessons Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 rounded-full border border-amber-200">
            <BookOpen className="w-5 h-5 text-amber-700" />
            <span className="text-amber-800 font-medium">Sacred Wisdom</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4 mb-6">
            Eternal Lessons from the Epic
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Mahabharata offers profound insights into human nature, morality, and the 
            complexities of life that remain relevant even today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lessons.map((lesson, index) => {
            const Icon = lesson.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${lesson.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{lesson.title}</h3>
                <p className="text-gray-600 leading-relaxed">{lesson.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-r from-amber-100 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Immerse Yourself in the Epic
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the Mahabharata like never before through interactive quizzes, 
              engaging games, and comprehensive learning modules.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Quiz Mastery</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Test your knowledge with 50 carefully crafted questions across three difficulty levels. 
                Track your progress and become a Mahabharata scholar.
              </p>
              <button
                onClick={() => onNavigate('quiz')}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Start Quiz
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Gamepad2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Epic Adventures</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Engage with interactive games featuring character matching, story progression, 
                and decision-making scenarios from the great epic.
              </p>
              <button
                onClick={() => onNavigate('game')}
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Play Games
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Deep Learning</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Explore comprehensive lessons, character profiles, and philosophical insights 
                that make the Mahabharata relevant to modern life.
              </p>
              <button
                onClick={() => onNavigate('lessons')}
                className="bg-gradient-to-r from-purple-500 to-violet-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Explore Lessons
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-amber-900 via-orange-900 to-yellow-900 rounded-3xl text-white p-16 text-center shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Begin Your Epic Journey Today
          </h2>
          <p className="text-xl text-yellow-100 mb-10 max-w-2xl mx-auto">
            Join thousands of learners who have discovered the profound wisdom and 
            timeless teachings of the Mahabharata.
          </p>
          <button
            onClick={() => onNavigate('quiz')}
            className="bg-gradient-to-r from-yellow-500 to-amber-500 text-amber-900 px-12 py-4 rounded-xl font-bold text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Start Your Adventure
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;