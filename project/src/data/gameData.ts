export interface Character {
  name: string;
  role: string;
  description: string;
  emoji: string;
  side: 'Pandava' | 'Kaurava' | 'Neutral';
  traits: string[];
}

export const characters: Character[] = [
  {
    name: 'Arjuna',
    role: 'Greatest Archer',
    description: 'The third Pandava brother, renowned as the greatest archer of his time. Krishna served as his charioteer and delivered the Bhagavad Gita teachings to him.',
    emoji: '🏹',
    side: 'Pandava',
    traits: ['Skilled archer', 'Devoted disciple', 'Heroic warrior']
  },
  {
    name: 'Krishna',
    role: 'Divine Guide',
    description: 'The eighth avatar of Lord Vishnu who served as Arjuna\'s charioteer and spiritual guide. He provided the philosophical teachings of the Bhagavad Gita.',
    emoji: '🪈',
    side: 'Pandava',
    traits: ['Divine wisdom', 'Strategic mind', 'Compassionate guide']
  },
  {
    name: 'Yudhishthira',
    role: 'Righteous King',
    description: 'The eldest Pandava brother, known for his unwavering commitment to truth and righteousness. He was called Dharmaraja for his adherence to moral principles.',
    emoji: '👑',
    side: 'Pandava',
    traits: ['Truthful', 'Righteous', 'Just ruler']
  },
  {
    name: 'Bhima',
    role: 'Strongest Warrior',
    description: 'The second Pandava brother, blessed with immense physical strength. He was known for his courage in battle and his loyalty to his family.',
    emoji: '💪',
    side: 'Pandava',
    traits: ['Immense strength', 'Fearless', 'Protective']
  },
  {
    name: 'Duryodhana',
    role: 'Kaurava Prince',
    description: 'The eldest of the hundred Kaurava brothers and the main antagonist of the epic. His jealousy and ambition led to the great war.',
    emoji: '⚔️',
    side: 'Kaurava',
    traits: ['Ambitious', 'Jealous', 'Skilled warrior']
  },
  {
    name: 'Karna',
    role: 'Noble Warrior',
    description: 'Known as the most generous and skilled warrior, born to Kunti but raised as a charioteer\'s son. Despite being on the wrong side, he remained loyal and generous.',
    emoji: '🌟',
    side: 'Kaurava',
    traits: ['Generous', 'Loyal', 'Skilled archer']
  },
  {
    name: 'Drona',
    role: 'Royal Teacher',
    description: 'The master teacher who trained both Pandavas and Kauravas in the arts of warfare and archery. He was torn between duty and affection for his students.',
    emoji: '📚',
    side: 'Kaurava',
    traits: ['Master teacher', 'Skilled warrior', 'Conflicted loyalties']
  },
  {
    name: 'Bhishma',
    role: 'Grand Uncle',
    description: 'The grand-uncle of both Pandavas and Kauravas, bound by a vow of celibacy and service to the throne. His adherence to duty led to tragic consequences.',
    emoji: '🛡️',
    side: 'Kaurava',
    traits: ['Devoted to duty', 'Skilled warrior', 'Tragic figure']
  },
  {
    name: 'Draupadi',
    role: 'Panchaali Princess',
    description: 'The wife of all five Pandava brothers, known for her beauty, intelligence, and fierce devotion. Her humiliation sparked the desire for revenge.',
    emoji: '👸',
    side: 'Pandava',
    traits: ['Intelligent', 'Strong-willed', 'Devoted wife']
  },
  {
    name: 'Nakula',
    role: 'Horse Expert',
    description: 'One of the twin Pandava brothers, known for his expertise with horses and his exceptional beauty. He was skilled in swordsmanship.',
    emoji: '🐎',
    side: 'Pandava',
    traits: ['Horse expert', 'Handsome', 'Skilled swordsman']
  },
  {
    name: 'Sahadeva',
    role: 'Astrology Expert',
    description: 'The youngest Pandava brother and twin of Nakula, known for his knowledge of astrology and his ability to predict the future.',
    emoji: '⭐',
    side: 'Pandava',
    traits: ['Astrologer', 'Wise', 'Prophetic abilities']
  },
  {
    name: 'Shakuni',
    role: 'Master Manipulator',
    description: 'Duryodhana\'s maternal uncle, known for his cunning and manipulation. He orchestrated the dice game that led to the Pandavas\' exile.',
    emoji: '🎲',
    side: 'Kaurava',
    traits: ['Cunning', 'Manipulative', 'Strategic mind']
  },
  {
    name: 'Vidura',
    role: 'Wise Counselor',
    description: 'The wise half-brother of Dhritarashtra and Pandu, known for his moral guidance and attempts to prevent the war through wisdom.',
    emoji: '🧠',
    side: 'Neutral',
    traits: ['Wise counselor', 'Moral guide', 'Peaceful mediator']
  },
  {
    name: 'Gandhari',
    role: 'Blindfolded Queen',
    description: 'The queen who blindfolded herself for life after marrying the blind king Dhritarashtra, showing her devotion and sacrifice.',
    emoji: '🙈',
    side: 'Kaurava',
    traits: ['Devoted wife', 'Sacrificing', 'Protective mother']
  },
  {
    name: 'Kunti',
    role: 'Divine Mother',
    description: 'The mother of the first three Pandavas and Karna, blessed with a divine mantra to call upon gods. Her choices shaped the destiny of her sons.',
    emoji: '👩‍👦‍👦',
    side: 'Pandava',
    traits: ['Divine connection', 'Protective mother', 'Strong-willed']
  },
  {
    name: 'Abhimanyu',
    role: 'Young Hero',
    description: 'Arjuna\'s brave son who learned warfare while in his mother\'s womb. His tragic death in the Chakravyuha became a turning point in the war.',
    emoji: '🏆',
    side: 'Pandava',
    traits: ['Brave', 'Young warrior', 'Heroic sacrifice']
  }
];