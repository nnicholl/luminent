# Luminent

Stealth coming-soon page for **luminent.ai**. Plain HTML / CSS / JS — no build
step, no framework, no third-party site builder. Fully self-owned.

## Files

```
index.html        markup + meta/OG tags
styles.css        all styling (dark, minimal, animated light)
script.js         cursor/tilt parallax for the ambient glow
assets/
  favicon.svg     browser tab icon
  og.svg          social link-preview image
CNAME             custom domain for GitHub Pages (luminent.ai)
```

## Preview locally

Open `index.html` directly, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy (GitHub Pages)

1. Push this folder to a GitHub repo (e.g. `luminent`).
2. In the repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, branch `main`, folder `/ (root)`.
3. The included `CNAME` file tells Pages to serve the site at `luminent.ai`.
4. Point DNS at GitHub Pages (see below).

## DNS (move luminent.ai off GoDaddy hosting)

You keep the domain wherever it's registered; you only change where it
*points*. In your DNS manager, set:

| Type  | Host | Value                                   |
| ----- | ---- | --------------------------------------- |
| A     | @    | 185.199.108.153                         |
| A     | @    | 185.199.109.153                         |
| A     | @    | 185.199.110.153                         |
| A     | @    | 185.199.111.153                         |
| CNAME | www  | `<your-github-username>.github.io`      |

Then in **Settings → Pages**, enable **Enforce HTTPS** once the certificate
provisions. Remove any old GoDaddy "Website Builder" / forwarding records.

> No GoDaddy code, assets, scripts, or branding are used anywhere in this site.
