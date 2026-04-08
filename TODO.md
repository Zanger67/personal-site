# TODO

## Future Ideas

- [ ] **LessWrong / Substack mirror sync** — Claude skill or scheduled task to detect new posts on LessWrong/Substack and mirror them as blog posts. Needs a `source` frontmatter field to distinguish mirrored vs native posts.
- [ ] **Privacy-focused analytics** — Plausible, Umami, or GoatCounter. Single `<script>` in BaseLayout. Umami is free self-hosted, Plausible is easiest paid option.
- [ ] **robots.txt / llms.txt prompt influencing** — Strategic control over how AI systems perceive and summarize the site.
- [ ] **Search** — Client-side search across blog and projects (Pagefind or Fuse.js)
- [ ] **Tags / filtering** — Clickable tags on blog and projects pages
- [ ] **"Now" page** — `/now` for current focus, could be JSON-driven
- [ ] **Resume / CV page** — Pull from `profile.json`, or PDF download link
- [ ] **404 page** — Custom styled error page
- [ ] **OG default image** — Create a 1200x630 PNG for link previews (`public/images/og-default.png`)
- [ ] **Syntax highlighting** — Shiki (built into Astro) for code blocks in blog posts
- [ ] **Individual project pages** — `src/pages/projects/[...slug].astro` for full project write-ups
- [ ] **Current/past affiliation styling** — Visual distinction (section dividers, opacity, or dot indicators)
- [ ] **US states map** — Bring back from original repo as an easter egg or standalone page
- [ ] **Command palette** — `Ctrl+K` to navigate the site, trigger easter eggs, and quick-access pages
- [ ] **Settings pane** — Move favourite fonts dropdown to a fixed bottom-right settings icon (gear). Clicking opens an upward-expanding pane with font selection and other toggles. Independent of footer.
- [ ] **GitHub repo stars** — Display star counts for pinned/featured repos, pulled via GitHub API or static at build time
- [ ] **LeetCode stats** — Show LeetCode profile stats or solve counts, via API or static embed
- [ ] **LinkedIn feed** — Surface recent LinkedIn posts or activity on the site
