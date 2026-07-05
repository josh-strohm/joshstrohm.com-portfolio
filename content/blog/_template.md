---
title: "Your article title"
date: "2026-07-04"
excerpt: "One sentence shown on the blog index, about page, and article header."
image: "/blog/images/your-slug/hero.png"
---

Opening paragraph. Hook the reader in two or three sentences. This shows up as the first body text on the article page.

Second paragraph if you need one. Keep paragraphs short — one idea each.

## Main section (H2)

Use `##` for main sections. These are the primary dividers in your article.

Regular paragraph text. You can use **bold for emphasis**, *italics for tone*, and `inline code` for tool names like `n8n` or field names.

### Subsection (H3)

Use `###` when you need a subsection inside an H2.

Bullet lists work well for quick points:

- First item
- Second item
- Third item

Numbered lists for steps or sequences:

1. Do this first
2. Then this
3. Finish with this

> Blockquotes set off a key line or pull quote. Use a single `>` at the start of the line.

---

Horizontal rules (`---` on its own line) create a visual break between major parts of the article.

## Images

Put your image file in `public/blog/images/your-slug/` and set the path in the `image` field at the top of the file (in frontmatter). That single image appears on the blog index card and as the hero at the top of the article page. Do not add `![...]()` image tags in the article body unless you explicitly want extra images mid-article.

## Links

External links open in a new tab automatically:

[Strohm Partners](https://strohmpartners.com)

Internal links to other site pages:

[Contact me](/contact)

## Publishing checklist

- Filename = URL slug (`your-slug.md` → `/blog/your-slug`)
- Files starting with `_` are ignored (like this template)
- `date` format: `"YYYY-MM-DD"`
- Replace placeholder images in `public/blog/images/your-slug/`