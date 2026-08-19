export const games = [
  {
    id: "growing-explorations",
    title: "Growing Explorations",
    shortTitle: "GE",
    genre: "Open-World RPG / Muscle Growth Simulation",
    status: "Active Development",
    statusColor: "emerald",
    releaseStage: "Version 0.20+ Alpha",
    bannerTag: "Open World • Dual Art • Dynamic Growth",
    theme: {
      primary: "from-emerald-500 via-teal-500 to-rose-600",
      accentColor: "#10b981",
      glowColor: "rgba(16, 185, 129, 0.3)",
      badgeBg: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
      cardBorder: "hover:border-emerald-500/50",
      headerGradient: "from-emerald-950/80 via-[#111c18]/90 to-[#0c0e18]",
      btnGradient: "from-emerald-500 via-teal-600 to-rose-600 hover:from-emerald-600 hover:to-rose-700",
      iconColor: "text-emerald-400",
    },
    heroQuote: "Forge your strength from a nimble wanderer into an unstoppable titaness in a vast, reactive world.",
    tagline: "An expansive open-world RPG where your character explores uncharted lands, defeats powerful adversaries, and grows increasingly muscular with every battle and training regimen.",
    description: `Growing Explorations is an open-world adventure RPG centered around continuous physical transformation and empowerment. 

Set in an untamed continent teeming with ancient ruins, monster dens, and competitive fight arenas, you guide your heroine from humble beginnings through multi-stage physical growth transformations. 

Every battle fought, heavy item forged, and nutrition catalyst consumed directly affects your character's in-game pixel art sprite and high-definition illustrated portraits across multiple growth tiers.`,
    itchUrl: "https://faustto.itch.io/growing-explorations",
    patreonUrl: "https://www.patreon.com/Faustto",
    platforms: ["Windows PC", "Linux", "Mac (Wine)"],
    features: [
      {
        title: "Dynamic Multi-Stage Growth",
        desc: "Watch your heroine transform visually and statistically from fit explorer to colossal powerhouse through battle conditioning and special nutrients."
      },
      {
        title: "Expansive Open World",
        desc: "Roam forests, mountain peaks, hidden dungeons, and lively settlements with non-linear exploration and secrets."
      },
      {
        title: "Dual Art Aesthetic",
        desc: "Explore with crisp animated pixel sprites in the overworld, paired with richly expressive, high-resolution dialogue portraits."
      },
      {
        title: "Branching Quests & Lore",
        desc: "Engage with quirky NPCs, take on guild bounties, unlock arena tournaments, and conquer realm bosses."
      },
      {
        title: "Deep Stat & Gear System",
        desc: "Equip colossal weapons that require raw strength thresholds to wield, craft muscle tonics, and build your ideal playstyle."
      }
    ],
    growthTiers: [
      { tier: "Tier 1", name: "Agile Adventurer", desc: "Lean, athletic build with quick combat reflexes." },
      { tier: "Tier 2", name: "Hardened Warrior", desc: "Defined muscular frame, broad shoulders, and increased carrying power." },
      { tier: "Tier 3", name: "Colossal Amazon", desc: "Massive upper body mass, dense abs, and crushing melee force." },
      { tier: "Tier 4+", name: "Titaness Supreme", desc: "Towering physique, earth-shaking strength, and legendary intimidation." }
    ],
    latestNews: "v0.20 update introduced new high-tier wilderness dungeons, expanded character transformation stages, and combat balance passes.",
    systemRequirements: {
      os: "Windows 7/8/10/11 (64-bit)",
      processor: "Intel Core i3 2.0 GHz / AMD equivalent",
      memory: "4 GB RAM",
      graphics: "DirectX 11 compatible GPU",
      storage: "1.5 GB free space"
    },
    guides: [
      {
        id: "ge-quickstart",
        title: "Beginner's Survival & Early Growth Guide",
        difficulty: "Beginner",
        readTime: "5 min read",
        summary: "Essential early tips on resting, protein rations, avoiding stamina exhaustion, and your first gym routines.",
        sections: [
          {
            heading: "Early Priorities",
            text: "Do not rush into high-tier wilderness regions right away. Begin by completing local town tasks to gather gold for Protein Rations and recovery salves."
          },
          {
            heading: "Managing Growth Meters",
            text: "Training and intense battles generate muscle fatigue. Always rest at the inn or a campfire to allow your body to recover and lock in permanent stat gains."
          }
        ],
        spoilers: [
          {
            title: "Secret Early Protein Cache",
            content: "Inspect the hollow tree behind the town blacksmith (Zone 1-B). You will find 2x High-Density Protein Flasks and 150 Gold to jumpstart your stats!"
          }
        ]
      },
      {
        id: "ge-breakthrough-quests",
        title: "Growth Tier Breakthrough Protocols",
        difficulty: "Intermediate",
        readTime: "7 min read",
        summary: "How to trigger each morphological tier transition and pass the Ancient Crucible trials.",
        sections: [
          {
            heading: "Advancing to Tier 2 & Tier 3",
            text: "Once your Growth Meter reaches 100%, you must pass the trial at the local Crucible of Might. Equip your highest strength weapon and drink a Fortifying Tonic before initiating the trial."
          }
        ],
        spoilers: [
          {
            title: "Tier 4 Titaness Trial Location",
            content: "The Tier 4 Crucible is hidden behind the waterfall at Iron Summit (requires STR >= 60 to push open the stone gate)."
          }
        ]
      }
    ]
  },
  {
    id: "beyond-evolution",
    title: "Beyond Evolution",
    shortTitle: "BE",
    genre: "Turn-Based Gacha RPG / Tactical Battler",
    status: "Active Development",
    statusColor: "purple",
    releaseStage: "Early Access Alpha",
    bannerTag: "Sci-Fi Gacha • Genetic Infusions • Tactical Squads",
    theme: {
      primary: "from-purple-500 via-fuchsia-500 to-cyan-500",
      accentColor: "#a855f7",
      glowColor: "rgba(168, 85, 247, 0.35)",
      badgeBg: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      cardBorder: "hover:border-purple-500/50",
      headerGradient: "from-purple-950/90 via-[#181128]/90 to-[#0c0e18]",
      btnGradient: "from-purple-600 via-pink-600 to-cyan-500 hover:from-purple-700 hover:to-cyan-600",
      iconColor: "text-purple-400",
    },
    heroQuote: "Engineer the ultimate legion of hyper-muscular heroines to halt a demonic cataclysm.",
    tagline: "A narrative turn-based tactical RPG where you research genetic strength enhancements, assemble powerhouse squads, and evolve character forms.",
    description: `Beyond Evolution takes place in a futuristic world facing an apocalyptic demonic invasion. 

As a lead genetic researcher, you must recruit, experiment with bio-catalysts, and transform everyday operatives into towering, muscle-bound juggernauts capable of crushing demonic monstrosities.

Experience deep tactical turn-based combat, synergy-based squad building, character-specific bond storylines, and multi-tier muscle transformations for every member of your roster.`,
    itchUrl: "https://faustto.itch.io/beyond-evolution",
    patreonUrl: "https://www.patreon.com/Faustto",
    platforms: ["Windows PC", "Web / Browser"],
    features: [
      {
        title: "Tactical Turn-Based Combat",
        desc: "Master element affinities, guard breaks, action-point combos, and devastating ultimate physical strikes."
      },
      {
        title: "Genetic Form Evolutions",
        desc: "Each character features distinct physical muscle growth evolution stages that alter both visual artwork and combat skills."
      },
      {
        title: "Rich Narrative & Bond Events",
        desc: "Interact with heroines in the laboratory archive to unlock deep backstories, unique dialogues, and special bond bonuses."
      },
      {
        title: "Player Customization Modes",
        desc: "Includes toggleable content modes (including partial non-futa settings) to suit individual player preferences."
      }
    ],
    growthTiers: [
      { tier: "Form 1", name: "Operative Base", desc: "Initial military physique and fundamental skill set." },
      { tier: "Form 2", name: "Bio-Enhanced", desc: "Noticeable bicep, quad, and trap growth with energized aura." },
      { tier: "Form 3", name: "Apex Juggernaut", desc: "Hypertrophied muscle mass, heavy armor displacement, and ultimate skill awakening." }
    ],
    latestNews: "Chapter 4 story missions are live with two new banner characters and squad synergy balance upgrades.",
    systemRequirements: {
      os: "Windows 10/11 (64-bit)",
      processor: "Intel Core i5 / AMD Ryzen 5 or higher",
      memory: "8 GB RAM",
      graphics: "Dedicated GPU (GTX 960 / RX 560 or better)",
      storage: "2.0 GB free space"
    },
    guides: [
      {
        id: "be-gacha-synergy",
        title: "Squad Synergy & Bio-Gem Economy",
        difficulty: "Intermediate",
        readTime: "6 min read",
        summary: "How to assemble balanced teams and efficiently spend Bio-Gems on rate-up banners.",
        sections: [
          {
            heading: "Optimal Squad Setup",
            text: "Pair 1 Primary Hypercarrier (Physical DPS) with 1 Armor-Shredder Frontliner, 1 AP Buffer, and 1 Healer for endgame raid consistency."
          }
        ],
        spoilers: [
          {
            title: "Secret Laboratory Bond Dialogue",
            content: "Reach Bond Level 10 with Valeria to unlock the classified 'Project Colossus' lore file in the Research Terminal."
          }
        ]
      }
    ]
  },
  {
    id: "expanding-horizons",
    title: "Expanding Horizons",
    shortTitle: "EH",
    genre: "2D Simulation / Management RPG",
    status: "Completed / Classic Archive",
    statusColor: "slate",
    releaseStage: "Final Classic Version",
    bannerTag: "Classic Simulation • Nostalgic Growth • Archive",
    theme: {
      primary: "from-amber-600 via-rose-600 to-indigo-600",
      accentColor: "#f59e0b",
      glowColor: "rgba(245, 158, 11, 0.3)",
      badgeBg: "bg-amber-500/20 text-amber-300 border-amber-500/30",
      cardBorder: "hover:border-amber-500/50",
      headerGradient: "from-amber-950/70 via-[#1c1811]/90 to-[#0c0e18]",
      btnGradient: "from-amber-600 via-rose-600 to-indigo-600 hover:from-amber-700 hover:to-indigo-700",
      iconColor: "text-amber-400",
    },
    heroQuote: "The foundational simulation game exploring the beauty and progression of female physical empowerment.",
    tagline: "Faustto's foundational simulation game featuring classic stat management, training routines, and milestone-based growth.",
    description: `Expanding Horizons was one of Faustto's earliest and most influential simulation projects. 

While its active development is concluded and preserved as a classic archive, it established the core growth formulas, visual pacing, and passionate community that laid the groundwork for Growing Explorations and Beyond Evolution.`,
    itchUrl: "https://faustto.itch.io/expanding-horizons",
    patreonUrl: "https://www.patreon.com/Faustto",
    platforms: ["Windows PC"],
    features: [
      {
        title: "Classic Growth Management",
        desc: "Balance daily workout schedules, protein intake, and recovery to unlock escalating muscle tiers."
      },
      {
        title: "Milestone Transformations",
        desc: "Experience visual milestone portraits as your character reaches peak physical condition."
      },
      {
        title: "Historical Foundation",
        desc: "A beloved classic project that kicked off the Faustto universe."
      }
    ],
    growthTiers: [
      { tier: "Phase I", name: "Gym Enthusiast", desc: "Foundational conditioning and muscle tone." },
      { tier: "Phase II", name: "Powerhouse", desc: "Significant hypertrophic development across all major muscle groups." },
      { tier: "Phase III", name: "Olympian Peak", desc: "Extreme mass and sculpted definition." }
    ],
    latestNews: "Archived. Full standalone builds are available on itch.io.",
    systemRequirements: {
      os: "Windows 7 or later",
      processor: "Dual-Core 1.8 GHz",
      memory: "2 GB RAM",
      storage: "500 MB free space"
    },
    guides: [
      {
        id: "eh-basics",
        title: "Classic Progression Overview",
        difficulty: "Beginner",
        readTime: "3 min read",
        summary: "Tips for managing daily stamina and maximizing training cycles in Expanding Horizons.",
        sections: [
          {
            heading: "Stamina Optimization",
            text: "Do not train two heavy sessions back-to-back without a meal. Stacking fatigue reduces the growth multiplier by 50%."
          }
        ],
        spoilers: []
      }
    ]
  }
];
