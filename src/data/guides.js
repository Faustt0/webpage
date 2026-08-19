export const guideCategories = [
  { id: "all", name: "All Guides" },
  { id: "growing-explorations", name: "Growing Explorations" },
  { id: "beyond-evolution", name: "Beyond Evolution" },
  { id: "general-faq", name: "FAQ & Technical Support" }
];

export const guides = [
  {
    id: "ge-getting-started",
    gameId: "growing-explorations",
    category: "growing-explorations",
    title: "Growing Explorations: Complete Beginner's Survival & Progression Guide",
    summary: "Essential early-game tips, stat allocation, stamina management, and where to find initial growth catalysts.",
    author: "Faustto Community",
    lastUpdated: "2026-08",
    difficulty: "Beginner",
    readTime: "6 min read",
    tags: ["Early Game", "Basics", "Stats", "Progression"],
    content: [
      {
        type: "section",
        heading: "1. Early Game Overview & Priorities",
        text: "When starting your journey in Growing Explorations, your primary objective is balancing exploration with consistent physical conditioning. Do not rush directly into high-tier wilderness zones before securing adequate recovery supplies and unlocking the basic training routines."
      },
      {
        type: "tips",
        title: "Key Beginner Rules to Remember",
        items: [
          "Always rest at inns or campsites to restore stamina and allow muscle recovery bonuses to register.",
          "Keep at least 5-10 protein rations or recovery tonics in your inventory before entering untamed dungeons.",
          "Talk to all town NPCs after major growth milestones—many unlock special dialogues and exclusive side quests.",
          "Save your game frequently in multiple slots, especially before confronting elite territory bosses."
        ]
      },
      {
        type: "section",
        heading: "2. Understanding the Growth & Stat System",
        text: "In Growing Explorations, physical development directly impacts both your visual character model/portrait and your combat attributes."
      },
      {
        type: "table",
        title: "Primary Attributes & Growth Effects",
        headers: ["Attribute", "Primary Effect", "Growth Impact"],
        rows: [
          ["Strength (STR)", "Physical damage, carry capacity, boulder clearance", "Enhances upper body & arm definition"],
          ["Endurance (END)", "Max HP, damage reduction, stamina regeneration", "Broadens torso and overall muscular density"],
          ["Agility (AGI)", "Turn priority, critical strike chance, evasion", "Improves combat tempo and leg conditioning"],
          ["Willpower (WIL)", "Skill potency, status effect resistance", "Unlocks higher-tier power surge abilities"]
        ]
      },
      {
        type: "spoiler",
        summary: "Click to reveal early hidden chest location",
        content: "Behind the waterfall in the Whispering Glen (coordinates X:14, Y:28), there is a hidden cavern containing an 'Ancient Protein Core' and 250 Gold. This item provides an instant boost to your initial muscle growth meter without stamina fatigue!"
      }
    ]
  },
  {
    id: "ge-growth-tiers-guide",
    gameId: "growing-explorations",
    category: "growing-explorations",
    title: "Growing Explorations: Muscle Growth Tiers & Evolution Thresholds",
    summary: "A deep dive into how growth tiers work, transformation triggers, portrait changes, and unlocking special feats.",
    author: "Faustto Dev",
    lastUpdated: "2026-08",
    difficulty: "Intermediate",
    readTime: "8 min read",
    tags: ["Growth System", "Transformations", "Portraits", "Mechanics"],
    content: [
      {
        type: "section",
        heading: "How Growth Tiers Trigger",
        text: "Your character's transformation occurs across distinct morphological tiers. Reaching a new tier alters your character's in-game sprite, combat battle animations, and portrait artwork, while granting access to heavy weapon classes and special field interactions."
      },
      {
        type: "steps",
        title: "Steps to Advance Growth Tiers Efficiently",
        items: [
          "Accumulate Growth EXP via combat with high-rank beasts or dedicated gym/training mini-games.",
          "Consume Tier-specific Elixirs or high-density nutrition rations.",
          "Complete the Tier Breakthrough Challenge located at the Ancient Crucible in each major province.",
          "Rest overnight to trigger the transformation cutscene and lock in permanent stat multipliers."
        ]
      },
      {
        type: "spoiler",
        summary: "Click to view Tier 4 & 5 Breakthrough Requirements",
        content: "To cross from Tier 3 (Colossal Amazon) into Tier 4 (Titaness Supreme), you must defeat the Goliath Guardian in the Iron Peaks and collect 3 Titan Shards. Make sure your END is at least 75 before drinking the Titan Core draught to avoid temporary stat recoil."
      }
    ]
  },
  {
    id: "be-team-synergy-gacha",
    gameId: "beyond-evolution",
    category: "beyond-evolution",
    title: "Beyond Evolution: Gacha Tier List, Banner Strategy & Team Synergies",
    summary: "Optimal banner pull strategies, recommended 4-star and 5-star character builds, and element combo synergies.",
    author: "Faustto Community",
    lastUpdated: "2026-08",
    difficulty: "Intermediate",
    readTime: "7 min read",
    tags: ["Gacha", "Tier List", "Team Building", "Combat"],
    content: [
      {
        type: "section",
        heading: "Banner Pull Economy & Recommendation",
        text: "Beyond Evolution features a generous pity system. It is strongly recommended to save your Bio-Gems for Rate-Up Character Banners rather than pulling repeatedly on standard pools."
      },
      {
        type: "table",
        title: "Top Tier Starter Units & Roles",
        headers: ["Character", "Type / Element", "Role", "Synergy Recommendation"],
        rows: [
          ["Valeria (Titan Vanguard)", "Physical / Kinetic", "Main DPS & Armor Breaker", "Pairs well with buff supports & turn pushers"],
          ["Dr. Elena (Bio-Catalyst)", "Support / Bio-Energy", "Team Atk Buffer & Healer", "Essential for high-difficulty boss raids"],
          ["Sorsha (Iron Brawler)", "Brawler / Thermal", "Frontline Bruiser & Stunner", "Excels against multi-target mob waves"],
          ["Kira (Shadow Juggernaut)", "Stealth / Dark Matter", "Single-Target Burst", "Devastating against chapter bosses"]
        ]
      },
      {
        type: "tips",
        title: "Optimal Team Composition Formula",
        items: [
          "1 Primary Muscle DPS (Hypercarrier)",
          "1 Defensive Frontliner / Taunt Specialist",
          "1 Energy / AP Battery Support",
          "1 Healer or Utility Debuffer"
        ]
      }
    ]
  },
  {
    id: "be-catalyst-evolution",
    gameId: "beyond-evolution",
    category: "beyond-evolution",
    title: "Beyond Evolution: Character Enhancement & Genetic Evolution Guide",
    summary: "How to farm catalyst fluids, unlock character muscle evolution forms, and trigger exclusive bond cutscenes.",
    author: "Faustto Dev",
    lastUpdated: "2026-08",
    difficulty: "Advanced",
    readTime: "5 min read",
    tags: ["Catalysts", "Evolutions", "Story Bonds", "Endgame"],
    content: [
      {
        type: "section",
        heading: "Evolution Protocols Explained",
        text: "Each character in Beyond Evolution can be evolved through multiple physical form stages. Evolving a unit modifies their character portrait, increases their muscle mass, unlocks upgraded super abilities, and reveals personal story logs in the Laboratory Archive."
      },
      {
        type: "spoiler",
        summary: "Click to reveal secret bond dialogue trigger",
        content: "Raising any unit's Bond Level to 10 and assigning them as your Laboratory Assistant unlocks a secret 3-part interactive dialogue series detailing their journey before the demonic outbreak."
      }
    ]
  },
  {
    id: "general-technical-faq",
    gameId: "general",
    category: "general-faq",
    title: "Technical FAQ: Save File Migration, itch.io Keys, and Patreon Perks",
    summary: "Everything you need to know about transferring save files across game versions, reporting bugs, and linking Patreon accounts.",
    author: "Faustto",
    lastUpdated: "2026-08",
    difficulty: "General",
    readTime: "4 min read",
    tags: ["FAQ", "Saves", "Patreon", "itch.io", "Troubleshooting"],
    content: [
      {
        type: "section",
        heading: "How to Transfer Save Files to New Game Updates",
        text: "When a new version of Growing Explorations or Beyond Evolution is released, you can keep your progress without starting from scratch."
      },
      {
        type: "steps",
        title: "Save File Transfer Steps",
        items: [
          "Navigate to your previous game folder and locate the 'www/save' or 'save' directory.",
          "Copy all files ending in '.rpgsave' or '.sav' to a safe location on your computer.",
          "Extract the newly downloaded game version into a fresh folder.",
          "Paste your copied save files into the new version's 'save' directory.",
          "Launch the game and choose 'Continue' from the main menu."
        ]
      },
      {
        type: "tips",
        title: "Accessing Patreon Early Builds on itch.io",
        items: [
          "Make sure your Patreon account is linked to your itch.io account via itch.io User Settings -> Connections.",
          "Once linked, visit Faustto's itch.io page; backer-only download links will automatically be unlocked for your tier level.",
          "If you encounter permission issues, try unlinking and relinking on itch.io or contact us on Discord."
        ]
      }
    ]
  }
];
