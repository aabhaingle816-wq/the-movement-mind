/* ==========================================================================
   THE MOVEMENT MIND — Article & topic list
   --------------------------------------------------------------------------
   This is the ONE file that controls which articles appear on the homepage,
   the Articles page, topic pages, search and "related articles".

   TO ADD AN ARTICLE: copy one of the blocks below (from { to },), paste it
   at the top of the list, and change the details. See README.md, Part 6.

   Fields:
     slug         the article's file name without ".html" (in /articles)
     title        headline
     subtitle     one-sentence standfirst
     excerpt      short summary shown on cards (1–2 sentences)
     category     one of: movement, neuro, nutrition, women, longevity, science
     date         publication date as YYYY-MM-DD (newest appear first)
     readingTime  minutes (about 220 words per minute)
     featured     true for the ONE article you want featured; others false
     draft        true shows a "Draft" label; set to false when published
     tags         extra words that help search find the article
     related      slugs of articles to suggest at the end (optional)
   ========================================================================== */

window.TMM_TOPICS = [
  { key: "movement", name: "Physiotherapy & Movement", slug: "physiotherapy-movement", image: "art-movement.svg",
    description: "Pain science, mobility, strength, posture, rehabilitation, exercise science, injury prevention, biomechanics, and functional health." },
  { key: "neuro", name: "Neuroscience & Behaviour", slug: "neuroscience-behaviour", image: "art-neuro.svg",
    description: "Brain function, learning, stress, nervous system regulation, attention, sleep, habits, and human behaviour." },
  { key: "nutrition", name: "Nutrition & Metabolic Health", slug: "nutrition-metabolic-health", image: "art-nutrition.svg",
    description: "Nutrition research, energy metabolism, blood glucose, insulin resistance, gut health, dietary patterns, and common nutrition myths." },
  { key: "women", name: "Women's Health", slug: "womens-health", image: "art-women.svg",
    description: "Women's musculoskeletal health, menstrual health, PCOS education, bone health, exercise, and responsible discussion of hormonal health." },
  { key: "longevity", name: "Prevention, Recovery & Longevity", slug: "prevention-recovery-longevity", image: "art-longevity.svg",
    description: "Physical resilience, healthy ageing, recovery, sleep, sustainable exercise, prevention, and long-term wellbeing." },
  { key: "science", name: "Science Explained", slug: "science-explained", image: "art-science.svg",
    description: "Research breakdowns, critical appraisal of popular health claims, practical health guides, book insights, and explanations of scientific evidence." }
];

window.TMM_ARTICLES = [
  {
    slug: "does-perfect-posture-exist",
    title: "Does Perfect Posture Actually Exist?",
    subtitle: "Why the idea of one ‘correct’ way to sit and stand is less certain than it sounds — and what may matter more.",
    excerpt: "We are often told to sit up straight to avoid pain. The relationship between posture and pain turns out to be more complicated, and more reassuring, than that.",
    category: "movement",
    date: "2026-10-15",
    readingTime: 3,
    featured: true,
    draft: true,
    tags: ["posture", "back pain", "neck pain", "ergonomics", "sitting"],
    related: ["strength-training-beyond-muscle", "evaluate-health-claims-online"]
  },
  {
    slug: "chronic-stress-brain-and-body",
    title: "How Chronic Stress Affects the Brain and Body",
    subtitle: "The stress response is designed to help us. Problems tend to arise when it rarely switches off.",
    excerpt: "Stress is not the enemy — it is a survival system. Understanding the difference between short bursts and long-term activation helps make sense of how stress shapes sleep, attention, mood and health.",
    category: "neuro",
    date: "2026-10-15",
    readingTime: 3,
    featured: false,
    draft: true,
    tags: ["stress", "cortisol", "nervous system", "sleep", "anxiety", "HPA axis"],
    related: ["evidence-on-recovery", "evaluate-health-claims-online"]
  },
  {
    slug: "insulin-resistance-explained",
    title: "Insulin Resistance Explained Without the Jargon",
    subtitle: "What insulin does, what ‘resistance’ means, and why it matters for long-term health.",
    excerpt: "Insulin resistance is discussed everywhere online, often with confusing or alarming claims. Here is what the term actually means, how it is assessed, and what is known about changing it.",
    category: "nutrition",
    date: "2026-10-15",
    readingTime: 2,
    featured: false,
    draft: true,
    tags: ["insulin", "blood sugar", "glucose", "type 2 diabetes", "metabolism", "PCOS"],
    related: ["strength-training-beyond-muscle", "evaluate-health-claims-online"]
  },
  {
    slug: "strength-training-beyond-muscle",
    title: "Why Strength Training Matters Beyond Building Muscle",
    subtitle: "Bones, metabolism, independence and mood — the wider case for lifting things up and putting them down.",
    excerpt: "Strength training is often framed around appearance. The broader case for it — from bone health to staying independent later in life — is stronger and more inclusive.",
    category: "movement",
    date: "2026-10-15",
    readingTime: 2,
    featured: false,
    draft: true,
    tags: ["strength training", "resistance training", "bone health", "ageing", "exercise", "muscle"],
    related: ["does-perfect-posture-exist", "evidence-on-recovery"]
  },
  {
    slug: "evaluate-health-claims-online",
    title: "How to Evaluate a Health Claim You See Online",
    subtitle: "A practical, eight-question checklist for reading health headlines and social media posts more clearly.",
    excerpt: "Health advice online ranges from careful to completely invented. A few simple questions can help you separate reasonable claims from overconfident ones.",
    category: "science",
    date: "2026-10-15",
    readingTime: 2,
    featured: false,
    draft: true,
    tags: ["critical thinking", "research", "evidence", "misinformation", "social media", "study design"],
    related: ["insulin-resistance-explained", "does-perfect-posture-exist"]
  },
  {
    slug: "evidence-on-recovery",
    title: "What Does the Evidence Actually Say About Recovery?",
    subtitle: "Sleep, load, food and the popular recovery tools — sorting the foundations from the fashionable.",
    excerpt: "Recovery has become an industry of gadgets and protocols. The foundations are simpler, and the evidence for many popular tools is more modest than the marketing suggests.",
    category: "longevity",
    date: "2026-10-15",
    readingTime: 2,
    featured: false,
    draft: true,
    tags: ["recovery", "sleep", "cold water immersion", "massage", "training load", "soreness"],
    related: ["strength-training-beyond-muscle", "chronic-stress-brain-and-body"]
  }
];
