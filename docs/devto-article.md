---
title: "I built an open protocol that makes any website readable by AI. Here's why."
published: false
description: "robots.txt tells machines to stay away. FlyWeb tells them: here's what I have."
tags: ai, webdev, opensource, protocol
cover_image:
---

Every AI agent on the internet right now is doing the same thing: scraping HTML, guessing what's content, and hallucinating when it gets it wrong.

Think about it. When ChatGPT, Claude, or Perplexity tries to answer a question using your website, here's what actually happens:

1. It fetches your HTML
2. It parses through `<div class="mx-4 flex items-center gap-2">`
3. It guesses which part is the article and which part is the sidebar ad
4. It generates an answer
5. It gives you **zero credit**

There's no standard way for a machine to ask: *"What content do you have?"*

Every API is bespoke. Every integration is custom. There's no universal protocol.

**Until now.**

## Introducing FlyWeb

FlyWeb is an open protocol — one JSON file at `/.well-known/flyweb.json` — that lets any website describe its content in a way machines can understand.

Think of it as the inverse of `robots.txt`. Instead of "stay away," it says **"here's what I have."**

```json
{
  "flyweb": "1.0",
  "entity": "My Tech Blog",
  "type": "blog",
  "attribution": {
    "required": true,
    "must_link": true
  },
  "resources": {
    "posts": {
      "path": "/.flyweb/posts",
      "format": "jsonl",
      "fields": ["title", "author", "date", "tags", "content", "url"],
      "access": "free",
      "query": "?tag={tag}&limit={n}"
    }
  }
}
```

That's the entire config. One file. Any AI agent that finds it instantly knows:
- What content you have (posts, products, articles, etc.)
- Where to get it (clean JSON, not HTML soup)
- How to query it (standard URL params)
- How to credit you (attribution is enforced at the protocol level)

## The Three Layers

FlyWeb works in three layers:

### 1. Discovery
AI agents fetch `/.well-known/flyweb.json`. It's the first thing they check — like how crawlers check `robots.txt`, but for structured data.

### 2. Structure
Content is served as clean JSON or JSONL at the paths you define. No parsing HTML. No guessing. Just data.

```
GET /.flyweb/posts
```

Returns:
```json
{"title": "Why AI Needs Structure", "author": "Sarah Chen", "date": "2026-02-15", "content": "..."}
{"title": "The Future of Web Protocols", "author": "Sarah Chen", "date": "2026-02-10", "content": "..."}
```

### 3. Query
Standard URL parameters. No SDK. No API key. No OAuth dance.

```
GET /.flyweb/posts?tag=ai&limit=5
```

Any AI agent can construct this. It's just a URL.

## Before & After

**Without FlyWeb**, an AI agent sees this:

```html
<div class="post-container mx-4">
  <div class="flex items-center gap-2">
    <img src="/avatars/sarah.jpg" />
    <span class="text-sm">Sarah Chen</span>
  </div>
  <h2 class="font-bold mt-4">
    AI Agents Need Structure
  </h2>
  <div class="prose mt-2">
    <p>The web was built for...</p>
    <div class="ad-banner">BUY NOW</div>
  </div>
</div>
```

Which part is the article? Where does content end? Is "Sarah Chen" the author or a commenter? The AI has to *guess*.

**With FlyWeb**, the same AI agent gets:

```json
{
  "title": "AI Agents Need Structure",
  "author": "Sarah Chen",
  "date": "2026-02-15",
  "tags": ["ai", "web"],
  "content": "The web was built for...",
  "url": "https://example.com/posts/42"
}
```

Clean. Structured. Zero guessing.

## Attribution Is Non-Negotiable

Here's what makes FlyWeb different from just "another API":

```json
"attribution": {
  "required": true,
  "license": "CC-BY-4.0",
  "must_link": true
}
```

This is enforced at the protocol level. When an AI agent reads your content through FlyWeb, it knows it **must** credit you. Must link back. Non-negotiable.

You can set price to zero. You can never set attribution to zero.

## 5 Minutes to Add It

### Option 1: Framework plugin

```bash
# Next.js
npm i next-flyweb

# Astro
npm i astro-flyweb

# SvelteKit
npm i sveltekit-flyweb

# Nuxt
npm i nuxt-flyweb

# Express / Node.js
npm i express-flyweb
```

### Option 2: CLI

```bash
npx flyweb init
```

This generates a `flyweb.json` template. Fill in your entity name, type, and resources. Done.

### Option 3: WordPress

Install the [FlyWeb WordPress plugin](https://github.com/flywebprotocol/flyweb/tree/master/wordpress-flyweb). It auto-generates flyweb.json from your posts, pages, and WooCommerce products.

### Validate it

```bash
npx flyweb check https://your-site.com
```

```
✓ Found /.well-known/flyweb.json
✓ Valid FlyWeb v1.0 config
✓ Attribution: required
✓ Resources: posts, products
All checks passed!
```

## For AI Developers: Client SDK

If you're building AI agents that *consume* web content, FlyWeb gives you structured data instead of HTML scraping:

```typescript
import { discover, fetchResource } from 'flyweb/client';

// Discover what a site exposes
const site = await discover('https://techcrunch.com');
console.log(site.config.resources);
// { articles: { path: "/.flyweb/articles", format: "jsonl", ... } }

// Fetch structured data
const articles = await fetchResource(
  'https://techcrunch.com',
  site.config.resources.articles,
  { params: { tag: 'ai' }, limit: 10 }
);
// Clean JSON array. No scraping. No hallucination.
```

## For AI Coding Tools: MCP Server

If you use Claude Code, Cursor, or any MCP-compatible tool, add FlyWeb to your config:

```json
{
  "mcpServers": {
    "flyweb": {
      "command": "npx",
      "args": ["-y", "flyweb-mcp"]
    }
  }
}
```

Your AI assistant can now:
- `flyweb_discover` — Check if any site has FlyWeb
- `flyweb_fetch` — Pull structured data from FlyWeb sites
- `flyweb_validate` — Validate a flyweb.json you're writing
- `flyweb_generate` — Generate a flyweb.json for any project

## Why This Matters Now

We're at an inflection point. AI agents are becoming the primary way people find information. If your content isn't machine-readable, it's invisible to this entire new layer of the internet.

SEO took 20 years to become standard. The AI equivalent — making your site structured for machines — needs to happen now. Not in 5 years when every AI company has built their own proprietary scraping pipeline. Now, while we can still build an **open standard**.

The flywheel is simple:

```
AI agents build sites with FlyWeb
        ↓
Other AI agents read structured data from those sites
        ↓
FlyWeb proves its value (clean data > scraping)
        ↓
More AI agents add it by default
        ↓
The web becomes machine-readable
```

## The Protocol Is Open

- **Spec**: [github.com/flywebprotocol/flyweb/SPEC.md](https://github.com/flywebprotocol/flyweb/blob/master/SPEC.md)
- **Website**: [flyweb.io](https://flyweb.io)
- **Docs**: [flyweb.io/docs](https://flyweb.io/docs)
- **npm**: [npmjs.com/package/flyweb](https://www.npmjs.com/package/flyweb)
- **GitHub**: [github.com/flywebprotocol/flyweb](https://github.com/flywebprotocol/flyweb)
- **MCP Server**: [npmjs.com/package/flyweb-mcp](https://www.npmjs.com/package/flyweb-mcp)

MIT licensed. No vendor lock-in. No payment required. Just an open protocol for a machine-readable web.

---

**Add FlyWeb to your site in 5 minutes.** `npx flyweb init` and your content stops being invisible to AI.

If you think the web should be readable by machines — not just humans — [star the repo](https://github.com/flywebprotocol/flyweb) and add it to your next project.

*The web was built for human eyes. It's time to give machines a structured way in.*
