// ═══════════════════════════════════════════════════════════
//  PORTFOLIO DATA  — Divyanshi Vashistha
//  Fonts: Space Grotesk (UI) · IBM Plex Mono (terminal/code)
// ═══════════════════════════════════════════════════════════

import { Computer, Focus } from "lucide-react";

export const PORTFOLIO_DATA = {
  name: 'Divyanshi Vashistha',
  title: 'AI × Systems × Product',
  bio: 'Building intelligent systems that solve real problems. Currently exploring the intersection of AI, systems and user-centric product design.',
  photoUrl: '/profile.jpeg',           // drop your photo here

  social: {
    email:    'divyanshivashistha@gmail.com',
    phone:    '+91-8279311841',
    github:   'https://github.com/divsvash',
    linkedin: 'https://linkedin.com/in/divyanshi-vashistha-4a0266274/',
  },

  ventures: [
    { id: 'v1', name: 'NeonMix',          description: 'NeonMix is an AI-assisted browser-native DJ environment that makes professional music mixing accessible without sacrificing creative control.',          status: 'active',     emoji: '🎧🎛️🔊🖤' },
    { id: 'v2', name: 'NeuroSight', description: 'An AI-assisted neuroimaging system designed to visualize and interpret neural anomalies in real time.',                status: 'active',     emoji: '🔗' },
    { id: 'v3', name: 'Research(6G)',    description: 'An experimental framework exploring AI-native networking and distributed inference across simulated 5G/6G environments.',                              status: 'active',     emoji: '🚀' },
    { id: 'v4', name:  'Creative Intelligence Lab',  description: 'Engineering digital presence through narrative, positioning, and interaction.',                    status: 'exploring',  emoji: '🎯' },
  ],

  spotify: [
    { title: 'E85',  artist: 'Don Toliver',  duration: '2:33' },
    { title: 'Secrets',       artist: 'Trick Singh',    duration: '3:23' },
    { title: 'Sanun Nahar Wale Pool',     artist: 'Noor Jehan',       duration: '4:05' },
    { title: 'Futile Devices',    artist: 'Sufjan Stevens',   duration: '2:15' },
  ],

  letterboxd: [
    { title: 'How to make millions before grandma dies',  year: 2024, rating: 5, director: 'Pat Boonnitipat' },
    { title: 'Bulbull',  year: 2020, rating: 4.5, director: 'Anvita Dutt Guptan'  },
    { title: 'Beautiful Boy',    year: 2018, rating: 5, director: 'Felix Van Groeningen'},
   // { title: 'Zone of Interest',            year: 2023, rating: 4, director: 'Jonathan Glazer'  },
  ],

  storygraph: [
    { title: 'The Count of Monte Cristo',           author: 'Alexandre Dumas',   progress: 70 },
    { title: 'Wuthering Heights',   author: 'Emily Bronte',     progress: 45 },
    { title: 'The Song of Achilles',     author: 'Madeline Miller' ,progress: 20 },
  ],

  projects: [
  {
    id: 1,
    name: 'URBAN OS',
    tags: ['Urban Systems', 'Data Infrastructure', 'Real-Time Interfaces'],
    desc: 'Experimental operating layer for urban intelligence systems integrating mobility, infrastructure, and real-time civic interaction.'
  },

  {
    id: 2,
    name: 'SKINSOUL AI',
    tags: ['Computer Vision', 'PyTorch', 'Mobile AI'],
    desc: 'AI-assisted skin analysis system combining computer vision with personalised skincare intelligence through a mobile-first experience.'
  },

  {
    id: 3,
    name: 'CIVICPULSE',
    tags: ['Next.js', 'Real-Time Systems', 'PostgreSQL'],
    desc: 'Real-time civic engagement infrastructure designed to connect citizens, governance systems, and public initiatives through live interaction layers.'
  },

  {
    id: 4,
    name: 'RESQNET',
    tags: ['Distributed Systems', 'WebRTC', 'Mesh Networks'],
    desc: 'Decentralised emergency communication framework designed for resilient disaster response using peer-to-peer mesh architecture.'
  },

  {
    id: 5,
    name: 'MESHCHAIN',
    tags: ['Rust', 'P2P Infrastructure', 'Cryptography'],
    desc: 'Experimental distributed mesh infrastructure exploring resilient connectivity and decentralized communication in low-network environments.'
  }
]

 // experience: [
   // { role: 'AI Systems Engineer',        org: 'TrustLayer AI — Stealth Startup', period: '2024 — Present', desc: 'Cryptographic verification systems for AI outputs. ZK proof frameworks for model attestation at scale.' },
   // { role: 'Full-Stack Engineer',         org: 'ResQNet',                         period: '2023 — 2024',    desc: 'Decentralised emergency response network. Consensus mechanisms and fault-tolerant mesh coordination.' },
   // { role: 'Product Designer & Dev',      org: 'SkinSoul AI',                     period: '2023',           desc: 'End-to-end product design for AI skin analysis. CV models integrated into mobile-first UX.' },
   // { role: 'Open Source Contributor',     org: 'AI Safety & Distributed Systems', period: '2022 — Present', desc: 'AI safety tooling, distributed systems libraries, and consensus protocol implementations.' },
  //,

  // ── IBM Plex Mono terminal command responses ──
 , commands: {
    whoami:   '> Full-stack builder. Problem solver. Coffee enthusiast.',
    focus:    '> AI × Systems × Product',
    status:   '● available\nlocation: India 🇮🇳\nmode: building',

    help: `┌─ AVAILABLE COMMANDS ─────────────────────────┐
│                                              │
│  help        show this menu                  │
│  about       about & focus areas             │
│  projects    featured projects               │
│  skills      technical skills                │
│  contact     email, github, linkedin         │
│  ventures    current side quests             │
│  vibes       music, films & books            │
│  resume      download resume (PDF)           │
│  clear       clear terminal                  │
│                                              │
└──────────────────────────────────────────────┘`,

    about: `// About Divyanshi Vashistha
───────────────────────────────────────────────

Building experimental systems across AI, infrastructure, and digital interaction.

Focus Areas:
  • Intelligent Interfaces & Real-Time Experiences
  • Distributed Systems & Resilient Networks
  • Computer Vision & Adaptive AI Workflows
  • Product Strategy & Human-Centered Design
  • Creative Technology & Digital Identity Systems

// Exploring how technology, design, and strategy
// converge to create more intuitive digital systems.`,

    projects: `// Active Systems
───────────────────────────────────────────────
01  URBAN OS       — Urban Intelligence · Infrastructure
02  SKINSOUL AI    — Computer Vision · Mobile AI
03  CIVICPULSE     — Civic Systems · Real-Time Interaction
04  RESQNET        — Distributed Emergency Networks
05  MESHCHAIN      — P2P Infrastructure · Cryptography

// Access detailed system logs below ↓`,

    skills: `// Technical Stack
───────────────────────────────────────────────
AI/ML:          Computer Vision, LLMs, RAG
Systems:        Distributed Systems, Networking, Cryptography
Backend:        Node.js, Python, MySQL, MongoDB, Rust
Frontend:       React, Next.js, TypeScript, Tailwind
Infrastructure: Docker, AWS, CI/CD

// Detailed capability matrix available in /skills ↑`,

    contact: `// Contact Channels
───────────────────────────────────────────────
📧 EMAIL
   divyanshivashistha@gmail.com

💼 LINKEDIN
   linkedin.com/in/divyanshi-vashistha-4a0266274/

💻 GITHUB
   github.com/divsvash

// Open to collaborations, research, and experimental builds`,

ventures: `// Current Ventures
───────────────────────────────────────────────

🎧 NEONMIX                  active
AI-assisted browser-native DJ environment focused on
real-time interaction and immersive performance UX.

🧠 NEUROSIGHT               research
Experimental neuroimaging intelligence system for
interpreting MRI-based neural anomaly patterns.

🌐 6G NETWORK RESEARCH      active
Exploring AI-native networking, distributed inference,
and ultra-low latency communication systems.

🎯 CREATIVE INTELLIGENCE LAB
Digital strategy, brand positioning, and interaction
systems for emerging products and identities.`,

    vibes: `// Vibes & Culture
───────────────────────────────────────────────
🎵 Audio:   Aternative/Indie · R&B · Hip-Hop
🎬 Cinema:   Black Swan · Call me by your name · 27 dresses
📚 Reading:  The Song of Achilles · The Count of Monte Cristo
// See footer media panel ↓`,

    resume: `// Downloading resume...
───────────────────────────────────────────────
→ Divyanshi_Vashistha_Resume.pdf

// Initializing secure transfer...`,
  },
};