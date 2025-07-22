import React, { useState } from 'react';
import { BookOpen, User, Heart, Shield, Crown, Star, ArrowRight, Home } from 'lucide-react';

interface LessonsPageProps {
  onNavigate: (page: string) => void;
}

const LessonsPage: React.FC<LessonsPageProps> = ({ onNavigate }) => {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);

  const lessons = [
    {
      id: 'dharma',
      title: 'The Path of Dharma',
      icon: Shield,
      color: 'from-blue-500 to-indigo-600',
      summary: 'Understanding righteousness and moral duty',
      content: {
        introduction: 'Dharma, the principle of righteousness, is the central theme of the Mahabharata. It represents the moral law that governs the universe and guides human conduct.',
        keyPoints: [
          'Dharma is not always black and white - it often requires difficult choices',
          'Yudhishthira\'s adherence to truth even in dire circumstances',
          'Krishna\'s guidance on situational ethics and the greater good',
          'The complexity of duty when personal and social obligations conflict'
        ],
        examples: [
          {
            character: 'Arjuna',
            situation: 'Battlefield dilemma',
            lesson: 'Sometimes we must act for the greater good, even when it\'s painful'
          },
          {
            character: 'Yudhishthira',
            situation: 'The dice game',
            lesson: 'Blind adherence to rules without wisdom can lead to disaster'
          }
        ],
        modernApplication: 'In today\'s world, dharma teaches us to consider the broader impact of our actions, to act with integrity, and to make decisions based on what is right, not just what is profitable or convenient.'
      }
    },
    {
      id: 'karma',
      title: 'The Law of Karma',
      icon: Star,
      color: 'from-purple-500 to-violet-600',
      summary: 'Actions and their inevitable consequences',
      content: {
        introduction: 'The Mahabharata vividly illustrates how every action creates a ripple effect that eventually returns to the actor.',
        keyPoints: [
          'Every action, good or bad, has consequences that may manifest immediately or in the future',
          'The war itself was the culmination of years of accumulated negative karma',
          'Positive actions create positive outcomes, even if delayed',
          'Personal transformation is possible through conscious action'
        ],
        examples: [
          {
            character: 'Duryodhana',
            situation: 'Lifetime of jealousy and hatred',
            lesson: 'Negative emotions and actions eventually destroy the perpetrator'
          },
          {
            character: 'Karna',
            situation: 'Despite good deeds, faced consequences of past actions',
            lesson: 'Even good people must face the results of their past mistakes'
          }
        ],
        modernApplication: 'Understanding karma helps us take responsibility for our actions and their outcomes. It encourages ethical behavior and patience with life\'s challenges, knowing that our current circumstances are often the result of past actions.'
      }
    },
    {
      id: 'unity',
      title: 'Unity in Diversity',
      icon: User,
      color: 'from-green-500 to-emerald-600',
      summary: 'Strength through collaboration and understanding',
      content: {
        introduction: 'Despite having characters from different backgrounds, beliefs, and motivations, the Mahabharata shows how unity can be achieved through shared values and mutual respect.',
        keyPoints: [
          'The Pandavas\' strength came from their unity despite different personalities',
          'Krishna united various kingdoms against adharma',
          'Diversity of skills and perspectives strengthens the whole',
          'Common goals can unite even former enemies'
        ],
        examples: [
          {
            character: 'The Pandavas',
            situation: 'Five brothers with different strengths',
            lesson: 'Complementary skills create unstoppable teams'
          },
          {
            character: 'Krishna\'s alliances',
            situation: 'Uniting diverse kingdoms',
            lesson: 'Great leaders build bridges across differences'
          }
        ],
        modernApplication: 'In our globalized world, this lesson is more relevant than ever. Success in business, politics, and social movements requires bringing together people with different backgrounds and perspectives toward common goals.'
      }
    },
    {
      id: 'leadership',
      title: 'True Leadership',
      icon: Crown,
      color: 'from-amber-500 to-orange-600',
      summary: 'Leading through service and sacrifice',
      content: {
        introduction: 'The Mahabharata presents various models of leadership, from the wise and just to the selfish and destructive.',
        keyPoints: [
          'True leaders serve others rather than themselves',
          'Leadership requires making difficult decisions for the greater good',
          'A leader\'s character determines the fate of those they lead',
          'Power without wisdom and compassion leads to destruction'
        ],
        examples: [
          {
            character: 'Krishna',
            situation: 'Guiding the Pandavas through moral dilemmas',
            lesson: 'Great leaders guide others to discover their own wisdom'
          },
          {
            character: 'Bhishma',
            situation: 'Loyalty to the throne vs. moral duty',
            lesson: 'Even good leaders can fail when they confuse loyalty with righteousness'
          }
        ],
        modernApplication: 'Modern leadership requires balancing stakeholder interests, making ethical decisions under pressure, and inspiring others through example rather than just authority.'
      }
    },
    {
      id: 'devotion',
      title: 'Love and Devotion',
      icon: Heart,
      color: 'from-rose-500 to-pink-600',
      summary: 'The transformative power of love and faith',
      content: {
        introduction: 'Love and devotion are powerful forces in the Mahabharata, capable of both great good and terrible destruction.',
        keyPoints: [
          'Unconditional love can overcome seemingly impossible obstacles',
          'Devotion to higher principles elevates human consciousness',
          'Love without wisdom can lead to attachment and suffering',
          'True devotion involves surrender of ego and selfish desires'
        ],
        examples: [
          {
            character: 'Arjuna\'s devotion to Krishna',
            situation: 'Surrendering ego for divine guidance',
            lesson: 'Spiritual growth requires surrendering our limited perspective'
          },
          {
            character: 'Draupadi\'s faith',
            situation: 'Calling on Krishna in her darkest hour',
            lesson: 'Sincere devotion brings divine protection'
          }
        ],
        modernApplication: 'In relationships and spiritual practice, this teaches us about the power of unconditional love, the importance of faith during difficult times, and how devotion to higher ideals can transform our lives.'
      }
    },
    {
      id: 'wisdom',
      title: 'Knowledge and Wisdom',
      icon: BookOpen,
      color: 'from-teal-500 to-cyan-600',
      summary: 'The difference between information and understanding',
      content: {
        introduction: 'The Mahabharata distinguishes between mere knowledge and true wisdom, showing how understanding must be applied with discrimination and compassion.',
        keyPoints: [
          'Knowledge without wisdom can be dangerous',
          'True wisdom comes from experience and reflection, not just study',
          'Wisdom requires understanding context and consequences',
          'The wisest people often question their own understanding'
        ],
        examples: [
          {
            character: 'Krishna\'s teachings',
            situation: 'The Bhagavad Gita on the battlefield',
            lesson: 'Wisdom is about understanding the deeper nature of reality'
          },
          {
            character: 'Vidura\'s counsel',
            situation: 'Advising the royal family',
            lesson: 'Wise advisors speak truth even when it\'s unwelcome'
          }
        ],
        modernApplication: 'In our information-rich age, this teaches us to seek understanding rather than just data, to consider the ethical implications of our knowledge, and to remain humble in the face of life\'s complexity.'
      }
    }
  ];

  const selectedLessonData = lessons.find(l => l.id === selectedLesson);

  if (selectedLesson && selectedLessonData) {
    const IconComponent = selectedLessonData.icon;
    
    return (
      <div className="min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <button
              onClick={() => setSelectedLesson(null)}
              className="inline-flex items-center space-x-2 text-amber-700 hover:text-amber-800 transition-colors duration-200 mb-6"
            >
              <ArrowRight className="w-5 h-5 transform rotate-180" />
              <span>Back to All Lessons</span>
            </button>
            
            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${selectedLessonData.color} flex items-center justify-center mx-auto mb-6`}>
              <IconComponent className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {selectedLessonData.title}
            </h1>
            <p className="text-xl text-gray-600">
              {selectedLessonData.summary}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* Introduction */}
            <section className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {selectedLessonData.content.introduction}
              </p>
            </section>

            {/* Key Points */}
            <section className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Principles</h2>
              <div className="space-y-4">
                {selectedLessonData.content.keyPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${selectedLessonData.color} flex items-center justify-center flex-shrink-0 mt-1`}>
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Examples */}
            <section className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Examples from the Epic</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedLessonData.content.examples.map((example, index) => (
                  <div key={index} className={`p-6 rounded-xl bg-gradient-to-r ${selectedLessonData.color} bg-opacity-10 border border-opacity-20`}>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{example.character}</h3>
                    <p className="text-gray-600 mb-3 italic">"{example.situation}"</p>
                    <p className="text-gray-700 font-medium">{example.lesson}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Modern Application */}
            <section className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Modern Application</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {selectedLessonData.content.modernApplication}
              </p>
            </section>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-100 to-cyan-100 px-4 py-2 rounded-full border border-teal-200 mb-6">
            <BookOpen className="w-5 h-5 text-teal-700" />
            <span className="text-teal-800 font-medium">Sacred Wisdom</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Timeless Lessons
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the profound teachings of the Mahabharata and discover how ancient wisdom 
            can guide us in our modern lives. Each lesson offers practical insights for 
            personal growth and ethical living.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lessons.map((lesson) => {
            const IconComponent = lesson.icon;
            return (
              <div
                key={lesson.id}
                onClick={() => setSelectedLesson(lesson.id)}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${lesson.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{lesson.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{lesson.summary}</p>
                <div className="flex items-center text-amber-600 group-hover:text-amber-700 transition-colors duration-200">
                  <span className="font-semibold">Explore lesson</span>
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            );
          })}
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
};

export default LessonsPage;