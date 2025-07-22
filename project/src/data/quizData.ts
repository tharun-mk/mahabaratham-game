export interface QuizQuestion {
  question: string;
  options: string[];
  correct: string;
  explanation: string;
}

export interface QuizData {
  beginner: QuizQuestion[];
  intermediate: QuizQuestion[];
  advanced: QuizQuestion[];
}

export const quizQuestions: QuizData = {
  beginner: [
    {
      question: "Who were the five Pandava brothers?",
      options: ["Yudhishthira, Bhima, Arjuna, Nakula, Sahadeva", "Krishna, Arjuna, Bhima, Karna, Drona", "Duryodhana, Dushasana, Bhima, Arjuna, Nakula", "Yudhishthira, Bhima, Karna, Nakula, Sahadeva"],
      correct: "Yudhishthira, Bhima, Arjuna, Nakula, Sahadeva",
      explanation: "The five Pandava brothers were Yudhishthira (eldest), Bhima (strongest), Arjuna (greatest archer), and the twins Nakula and Sahadeva."
    },
    {
      question: "Who was Krishna's role in the Mahabharata?",
      options: ["A warrior king", "Arjuna's charioteer and guide", "A sage", "The main villain"],
      correct: "Arjuna's charioteer and guide",
      explanation: "Krishna served as Arjuna's charioteer in the great war and was his spiritual guide, delivering the famous Bhagavad Gita teachings on the battlefield."
    },
    {
      question: "What was the name of the great war in the Mahabharata?",
      options: ["Ramayana War", "Kurukshetra War", "Lanka War", "Hastinapur War"],
      correct: "Kurukshetra War",
      explanation: "The great 18-day war was fought on the battlefield of Kurukshetra between the Pandavas and Kauravas."
    },
    {
      question: "Who was the eldest of the Kaurava brothers?",
      options: ["Dushasana", "Duryodhana", "Karna", "Shakuni"],
      correct: "Duryodhana",
      explanation: "Duryodhana was the eldest of the 100 Kaurava brothers and the main antagonist who opposed the Pandavas."
    },
    {
      question: "What weapon was Arjuna famous for using?",
      options: ["Mace", "Sword", "Bow and arrows", "Spear"],
      correct: "Bow and arrows",
      explanation: "Arjuna was renowned as the greatest archer of his time, wielding the divine bow Gandiva with unmatched skill."
    },
    {
      question: "Who was Draupadi?",
      options: ["Krishna's wife", "The common wife of the five Pandavas", "Duryodhana's sister", "Arjuna's daughter"],
      correct: "The common wife of the five Pandavas",
      explanation: "Draupadi was the remarkable princess who became the wife of all five Pandava brothers, playing a crucial role in the epic."
    },
    {
      question: "What was the name of Arjuna's bow?",
      options: ["Vijaya", "Gandiva", "Sharanga", "Pinaka"],
      correct: "Gandiva",
      explanation: "Gandiva was Arjuna's celestial bow, given to him by Varuna, the god of water. It was said to be indestructible and incredibly powerful."
    },
    {
      question: "Who was known as the strongest among the Pandavas?",
      options: ["Yudhishthira", "Arjuna", "Bhima", "Nakula"],
      correct: "Bhima",
      explanation: "Bhima was famous for his immense physical strength and was considered the strongest warrior among the Pandavas."
    },
    {
      question: "What game led to the Pandavas losing their kingdom?",
      options: ["Chess", "Dice", "Cards", "Archery contest"],
      correct: "Dice",
      explanation: "The infamous game of dice, orchestrated by Shakuni, led to Yudhishthira losing the kingdom and the Pandavas' exile."
    },
    {
      question: "How many days did the Kurukshetra war last?",
      options: ["12 days", "15 days", "18 days", "21 days"],
      correct: "18 days",
      explanation: "The great Kurukshetra war lasted for 18 days, with each day bringing intense battles and significant losses on both sides."
    },
    {
      question: "Who taught the Pandavas and Kauravas archery and warfare?",
      options: ["Krishna", "Bhishma", "Drona", "Kripa"],
      correct: "Drona",
      explanation: "Dronacharya was the royal teacher who trained both the Pandavas and Kauravas in the arts of warfare and archery."
    },
    {
      question: "What was Yudhishthira known for?",
      options: ["His strength", "His truthfulness", "His archery skills", "His wealth"],
      correct: "His truthfulness",
      explanation: "Yudhishthira was renowned for always speaking the truth and was called 'Dharmaraja' for his adherence to righteousness."
    },
    {
      question: "Who was Karna's real mother?",
      options: ["Kunti", "Gandhari", "Draupadi", "Madri"],
      correct: "Kunti",
      explanation: "Karna was born to Kunti before her marriage, making him the eldest Pandava brother, though this was revealed only later."
    },
    {
      question: "What was the relationship between Pandavas and Kauravas?",
      options: ["Brothers", "Cousins", "Uncle-nephews", "Friends"],
      correct: "Cousins",
      explanation: "The Pandavas and Kauravas were cousins, both being descendants of King Bharata, which made their conflict a family war."
    },
    {
      question: "Who was the commander-in-chief of the Kaurava army in the beginning?",
      options: ["Drona", "Karna", "Bhishma", "Duryodhana"],
      correct: "Bhishma",
      explanation: "Bhishma, the grand-uncle of both the Pandavas and Kauravas, was the first commander-in-chief of the Kaurava army."
    },
    {
      question: "Which Pandava was known for his expertise with horses?",
      options: ["Yudhishthira", "Bhima", "Arjuna", "Nakula"],
      correct: "Nakula",
      explanation: "Nakula was renowned for his knowledge of horses and was considered the most handsome of the Pandava brothers."
    },
    {
      question: "What was Sahadeva's special skill?",
      options: ["Swordsmanship", "Astrology", "Medicine", "Cooking"],
      correct: "Astrology",
      explanation: "Sahadeva was known for his knowledge of astrology and could predict future events, though he was often unable to prevent them."
    }
  ],
  
  intermediate: [
    {
      question: "What was the primary cause of the Kurukshetra war?",
      options: ["Personal revenge", "Dispute over succession to the throne", "Religious differences", "Trade disputes"],
      correct: "Dispute over succession to the throne",
      explanation: "The war was fundamentally about the rightful succession to the Hastinapur throne, with both the Pandavas and Kauravas claiming legitimate rights to rule."
    },
    {
      question: "Who gave Arjuna the Bhagavad Gita teachings?",
      options: ["Vyasa", "Bhishma", "Krishna", "Drona"],
      correct: "Krishna",
      explanation: "Krishna delivered the Bhagavad Gita to Arjuna on the battlefield of Kurukshetra, providing philosophical guidance about duty and righteousness."
    },
    {
      question: "What was the condition for Karna to fight in the war?",
      options: ["He must defeat Arjuna", "Bhishma should not be on the field", "He needed divine weapons", "He required royal recognition"],
      correct: "Bhishma should not be on the field",
      explanation: "Karna refused to fight as long as Bhishma was the commander, due to past humiliations and disagreements between them."
    },
    {
      question: "Who was responsible for Abhimanyu's death?",
      options: ["Karna alone", "Drona alone", "Multiple warriors attacking together", "Duryodhana"],
      correct: "Multiple warriors attacking together",
      explanation: "Abhimanyu was killed when multiple great warriors attacked him simultaneously, breaking the rules of fair combat."
    },
    {
      question: "What was Bhishma's vow that gave him his name?",
      options: ["Never to lie", "Never to marry", "Never to retreat", "Never to fight women"],
      correct: "Never to marry",
      explanation: "Bhishma took a vow of celibacy to ensure his father could marry Satyavati, earning him the name Bhishma (the terrible vow)."
    },
    {
      question: "Who killed Drona and how?",
      options: ["Arjuna with an arrow", "Dhrishtadyumna by beheading", "Krishna with a discus", "Bhima with a mace"],
      correct: "Dhrishtadyumna by beheading",
      explanation: "Dhrishtadyumna beheaded Drona after the latter had laid down his weapons upon hearing (false) news of his son Ashwatthama's death."
    },
    {
      question: "What was the significance of Yudhishthira's lie about Ashwatthama?",
      options: ["It won the war", "It was his first lie", "It caused his downfall", "It saved Arjuna's life"],
      correct: "It was his first lie",
      explanation: "Yudhishthira, known for never lying, told his first lie about Ashwatthama's death (the elephant, not Drona's son), marking a moral compromise."
    },
    {
      question: "Who was Shikhandi and why was Shikhandi important?",
      options: ["A great warrior", "Reincarnation of Amba, instrumental in Bhishma's defeat", "Krishna's ally", "A sage"],
      correct: "Reincarnation of Amba, instrumental in Bhishma's defeat",
      explanation: "Shikhandi was the reincarnation of Amba, who sought revenge against Bhishma and was crucial in his defeat as Bhishma wouldn't fight against someone born as a woman."
    },
    {
      question: "What was Barbarika's (Khatushyamji's) boon and sacrifice?",
      options: ["Invincible in battle", "His head to watch the entire war", "Immortality", "Divine weapons"],
      correct: "His head to watch the entire war",
      explanation: "Barbarika sacrificed his head to Krishna before the war, and his head watched the entire battle, later testifying to Krishna's role in victory."
    },
    {
      question: "What was the curse on the Kuru dynasty?",
      options: ["Never to have peace", "To fight among themselves", "To lose their kingdom", "To die in battle"],
      correct: "To fight among themselves",
      explanation: "The Kuru dynasty was cursed by various sages that family members would fight and destroy each other, which manifested in the great war."
    },
    {
      question: "Who were the Maharathis among the Pandavas?",
      options: ["All five brothers", "Only Arjuna and Bhima", "Arjuna, Bhima, and Yudhishthira", "Only Arjuna"],
      correct: "Arjuna, Bhima, and Yudhishthira",
      explanation: "Maharathis were the greatest warriors. Among Pandavas, Arjuna, Bhima, and Yudhishthira were recognized as Maharathis capable of fighting multiple warriors simultaneously."
    },
    {
      question: "What was Ghatotkacha's role in the war?",
      options: ["Comic relief", "Sacrificing himself to save Arjuna from Karna", "Leading the Pandava army", "Spying for Krishna"],
      correct: "Sacrificing himself to save Arjuna from Karna",
      explanation: "Ghatotkacha, Bhima's son, sacrificed his life to force Karna to use his divine Vasavi Shakti weapon, thus saving Arjuna from certain death."
    },
    {
      question: "What happened to the survivors after the war?",
      options: ["They lived happily ever after", "Most eventually died tragic deaths", "They became sages", "They founded new kingdoms"],
      correct: "Most eventually died tragic deaths",
      explanation: "The war's aftermath was tragic - Krishna died, the Pandavas eventually renounced the world, and the Yadava clan was destroyed, showing the ultimate cost of war."
    },
    {
      question: "What was Krishna's strategy during the war?",
      options: ["Direct military command", "Psychological warfare and guidance", "Using divine powers openly", "Fighting alongside warriors"],
      correct: "Psychological warfare and guidance",
      explanation: "Krishna primarily used psychological warfare, strategic advice, and moral guidance rather than direct fighting or openly displaying divine powers."
    },
    {
      question: "Who wrote the Mahabharata and what was his relationship to the story?",
      options: ["Valmiki as an observer", "Vyasa as a character in the story", "Narada as a narrator", "Brahma as a creator"],
      correct: "Vyasa as a character in the story",
      explanation: "Sage Vyasa, who composed the Mahabharata, was also a character in the epic - he was the father of Dhritarashtra, Pandu, and Vidura."
    }
  ],
  
  advanced: [
    {
      question: "What is the philosophical significance of Krishna's teachings in the Bhagavad Gita?",
      options: ["Promoting violence", "Establishing the concept of righteous action (dharma)", "Rejecting worldly duties", "Advocating for monarchy"],
      correct: "Establishing the concept of righteous action (dharma)",
      explanation: "The Bhagavad Gita establishes the philosophy of performing one's duty (dharma) without attachment to results, integrating action, knowledge, and devotion."
    },
    {
      question: "What does Yudhishthira's final test in heaven represent philosophically?",
      options: ["The importance of loyalty over righteousness", "That compassion transcends rigid morality", "The futility of good deeds", "The supremacy of truth over all"],
      correct: "That compassion transcends rigid morality",
      explanation: "When Yudhishthira chose to accompany the dog (Dharma in disguise) and refused to abandon his brothers in hell, it showed that true dharma is compassionate rather than merely rule-bound."
    },
    {
      question: "What is the deeper meaning of the dice game in the Mahabharata?",
      options: ["A simple game of chance", "The illusion of free will and destiny", "The dangers of gambling", "Political manipulation"],
      correct: "The illusion of free will and destiny",
      explanation: "The dice game represents the complex interplay between fate and free will, showing how past actions (karma) create circumstances that seem to limit present choices."
    },
    {
      question: "How does the concept of 'maya' (illusion) manifest in the Mahabharata?",
      options: ["Through magical tricks", "In the characters' misperception of reality and duty", "As divine interventions", "Through prophetic dreams"],
      correct: "In the characters' misperception of reality and duty",
      explanation: "Maya in the Mahabharata refers to the characters' inability to perceive the true nature of dharma, leading to moral confusion and the tragic war."
    },
    {
      question: "What is the significance of Karna's internal conflict throughout the epic?",
      options: ["His desire for recognition", "The struggle between loyalty and righteousness", "His rivalry with Arjuna", "His low birth status"],
      correct: "The struggle between loyalty and righteousness",
      explanation: "Karna embodies the tragic conflict between personal loyalty (to Duryodhana) and dharmic righteousness, showing how good people can make wrong choices."
    },
    {
      question: "What does Bhishma's death teach about the nature of dharma?",
      options: ["That vows are absolute", "That even noble intentions can lead to adharma", "That celibacy is the highest virtue", "That loyalty is supreme"],
      correct: "That even noble intentions can lead to adharma",
      explanation: "Bhishma's tragic end shows that blind adherence to vows without considering their broader consequences can actually support adharma rather than dharma."
    },
    {
      question: "How does the Mahabharata present the concept of 'yuganta' (end of an age)?",
      options: ["As a natural cycle", "As moral degradation requiring renewal", "As divine punishment", "As technological progress"],
      correct: "As moral degradation requiring renewal",
      explanation: "The epic presents the war as marking the end of Dwapara Yuga and beginning of Kali Yuga, showing how moral degradation necessitates cosmic renewal."
    },
    {
      question: "What is the deeper significance of Krishna not fighting in the war?",
      options: ["He was bound by his promise", "Divine beings shouldn't interfere", "To show the power of guidance over force", "He was protecting himself"],
      correct: "To show the power of guidance over force",
      explanation: "Krishna's non-fighting role demonstrates that true leadership lies in guidance and wisdom rather than direct action, showing how consciousness shapes reality."
    },
    {
      question: "What does Draupadi's question in the assembly reveal about dharma?",
      options: ["Women's rights in ancient times", "The complexity and contextual nature of dharma", "The corruption of the court", "The power of questioning authority"],
      correct: "The complexity and contextual nature of dharma",
      explanation: "Draupadi's question about whether Yudhishthira had the right to stake her after losing himself reveals dharma's contextual complexity and challenges absolute interpretations."
    },
    {
      question: "How does the epic handle the paradox of violence for peace?",
      options: ["It justifies all violence", "It condemns all violence", "It presents violence as sometimes necessary for cosmic order", "It shows violence as inevitable"],
      correct: "It presents violence as sometimes necessary for cosmic order",
      explanation: "The Mahabharata grapples with the paradox that sometimes violence becomes necessary to prevent greater adharma and restore cosmic balance, though it's always tragic."
    },
    {
      question: "What is the philosophical significance of the Pandavas' final journey?",
      options: ["Reward for good deeds", "The ultimate renunciation and transcendence of worldly attachments", "Escape from responsibilities", "Divine favoritism"],
      correct: "The ultimate renunciation and transcendence of worldly attachments",
      explanation: "The Pandavas' final journey represents the ultimate spiritual path of renunciation, showing how even righteous rulers must eventually transcend worldly attachments."
    },
    {
      question: "How does the Mahabharata view the relationship between knowledge and action?",
      options: ["Knowledge should replace action", "Action is more important than knowledge", "True knowledge must manifest in right action", "They are completely separate"],
      correct: "True knowledge must manifest in right action",
      explanation: "The epic teaches that genuine spiritual knowledge (jnana) must be integrated with righteous action (karma), as shown through Krishna's teachings and the characters' journeys."
    },
    {
      question: "What does the concept of 'dharma-sankata' (moral dilemma) represent in the epic?",
      options: ["Simple moral choices", "The absence of clear moral guidelines", "Situations where different dharmic duties conflict", "Divine tests of faith"],
      correct: "Situations where different dharmic duties conflict",
      explanation: "Dharma-sankata represents situations where different moral duties conflict, requiring wisdom to discern the highest dharma in specific contexts, as seen throughout the epic."
    },
    {
      question: "How does the Mahabharata present the role of divine will versus human agency?",
      options: ["Everything is predetermined", "Humans have complete free will", "A complex interaction where divine will works through human choices", "Divine will only matters for gods"],
      correct: "A complex interaction where divine will works through human choices",
      explanation: "The epic presents a sophisticated view where divine will and human agency interact - characters have choices, but these choices are influenced by past karma and divine purpose."
    },
    {
      question: "What is the ultimate teaching of the Mahabharata about the nature of reality?",
      options: ["The world is an illusion to be escaped", "Reality is purely physical", "Reality is multidimensional, requiring both engagement and detachment", "Reality is determined by the strongest"],
      correct: "Reality is multidimensional, requiring both engagement and detachment",
      explanation: "The Mahabharata teaches that reality operates on multiple levels - physical, moral, and spiritual - requiring both active engagement with dharmic duties and inner detachment from results."
    }
  ]
};