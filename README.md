# Faustto's Official Website & Game Guides Portal ⚔️

The official developer portfolio, game catalog, and interactive guides knowledge base for **Faustto** (creator of *Growing Explorations*, *Beyond Evolution*, *Expanding Horizons*, and more).

Deployed automatically to **GitHub Pages** via GitHub Actions.

---

## 🌟 Features

- **Developer Showcase & Identity**: Dark gaming theme with glow effects, hero highlights, and direct community links.
- **Game Library**: Full specs, release stages, status tags, system requirements, and direct download links (itch.io, Patreon).
- **Interactive Guides & Wiki**:
  - Real-time search across quests, stats, items, and mechanics.
  - Category filters by game.
  - Step-by-step checklists & stat calculation tables.
  - Click-to-reveal **Spoiler Protection** for secret coordinates and story triggers.
- **Community & Patreon Hub**: Tier breakdowns, Discord server links, DeviantArt gallery, and itch.io hub.
- **Zero-Friction Content Editing**: Add new guides, games, or updates in seconds by editing simple JavaScript/JSON data files without touching UI code.

---

## 🛠️ How to Add or Edit Content

All website content is organized cleanly under `src/data/`:

### 1. Adding a New Game
Open [`src/data/games.js`](./src/data/games.js) and add a new entry:
```javascript
{
  id: "my-new-game",
  title: "My New Game",
  genre: "Genre / Mechanics",
  status: "Active Development", // or "Playable Alpha", "Completed"
  tagline: "Short summary...",
  description: "Detailed description...",
  itchUrl: "https://faustto.itch.io/...",
  patreonUrl: "https://www.patreon.com/Faustto",
  features: ["Feature 1", "Feature 2"],
  systemRequirements: { ... }
}
```

### 2. Adding a New Guide or Walkthrough
Open [`src/data/guides.js`](./src/data/guides.js) and add your guide. You can mix and match sections, tips, tables, numbered steps, and spoiler boxes:
```javascript
{
  id: "unique-guide-id",
  gameId: "growing-explorations", // or "beyond-evolution", "general"
  category: "growing-explorations",
  title: "My Quest Walkthrough",
  summary: "Brief summary of what this guide covers.",
  author: "Faustto",
  difficulty: "Beginner", // or "Intermediate", "Advanced"
  readTime: "5 min read",
  tags: ["Quest", "Secrets", "Leveling"],
  content: [
    { type: "section", heading: "Part 1: Starting the Quest", text: "..." },
    { type: "tips", title: "Important Tips", items: ["Tip 1", "Tip 2"] },
    { type: "steps", title: "Steps to Complete", items: ["Step 1", "Step 2"] },
    { type: "spoiler", summary: "Click to reveal secret boss location", content: "..." },
    { type: "table", title: "Stat Requirements", headers: ["Stat", "Req"], rows: [["STR", "25"], ["END", "30"]] }
  ]
}
```

### 3. Updating Social Media & Community Links
Open [`src/data/socials.js`](./src/data/socials.js) to update your Discord invite link, Patreon URL, itch.io profile, or DeviantArt page.

---

## 🚀 Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start local development server**:
   ```bash
   npm run dev
   ```

3. **Build static production files**:
   ```bash
   npm run build
   ```

---

## 🚢 Automatic GitHub Pages Deployment

This repository includes a pre-configured GitHub Actions workflow in [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml).

### To Deploy:
1. Go to your repository settings on GitHub: `https://github.com/Faustt0/webpage/settings/pages`
2. Under **Build and deployment > Source**, select **GitHub Actions**.
3. Push your code to the `main` branch (`git push origin main`).
4. GitHub Actions will automatically build and publish your website live to `https://faustt0.github.io/webpage/`.
