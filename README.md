# ⚽ World Cup Watch

A free, fast World Cup 2026 schedule + "where to watch on TV" guide.
Static frontend + one serverless function on **Cloudflare Pages** (free tier
allows ads + unlimited bandwidth). Monetised with **Google AdSense**.

> ⚠️ Why not Vercel? Vercel's free "Hobby" plan forbids commercial use (ads),
> so it can suspend a monetised site. Cloudflare Pages' free tier explicitly
> allows commercial use and ads — that's why we use it.

- 🗓️ Full fixture list, kick-off auto-converted to each visitor's timezone
- 📺 Per-country broadcaster guide (**you** control this in `data/broadcasters.json`)
- ➕ Add any match to Google / Apple / Outlook calendar with a 30-min reminder
- 🔴 Live status & scores, filters by day / status / team
- 🌙 Dark & light mode
- 💰 AdSense slots + ads.txt + privacy policy ready

---

## How it fits together

```
Visitor ─▶ index.html / app.js  (static, free)
                │  fetch
                ▼
          /api/matches  (Cloudflare Pages Function: functions/api/matches.js)
                ├─▶ football-data.org  → fixtures & scores (API key hidden in env var)
                └─▶ data/broadcasters.json  → where to watch (you edit this)
```

If no API key is set, the site automatically shows the sample fixtures in
`data/sample-matches.json`, so it never looks broken.

---

## 1. Get a free football API key (2 min)

1. Register at <https://www.football-data.org/client/register> (free).
2. Copy your API token. The free tier includes the **FIFA World Cup** (`WC`).

> Prefer a different provider? You only need to edit the `normalize()` and
> `fetchFixtures()` functions in `api/matches.js`.

## 2. Deploy to Cloudflare Pages (free)

**Option A — from GitHub (recommended):**
1. Push this folder to a GitHub repo.
2. Go to <https://dash.cloudflare.com> → **Workers & Pages → Create → Pages →
   Connect to Git** → pick the repo.
3. Build settings: **Framework preset: None**, **Build command: (leave empty)**,
   **Build output directory: `/`** (root). Click **Save and Deploy**.
   Cloudflare auto-detects the `functions/` folder and wires up `/api/matches`.

**Option B — Wrangler CLI:**
```bash
npm i -g wrangler
wrangler pages deploy .    # first run creates the project
```

## 3. Add your API key in Cloudflare

Cloudflare dashboard → your Pages project → **Settings → Environment variables
→ Production** → Add:

| Name                     | Value              |
|--------------------------|--------------------|
| `FOOTBALL_DATA_API_KEY`  | your token         |
| `COMPETITION_CODE`       | `WC` (optional)    |

Then **Deployments → Retry/redeploy** so the key takes effect.

## 4. Point your domain (the ~$10/yr part)

1. Buy a domain (Cloudflare Registrar is at-cost, Namecheap, Porkbun…). Short &
   memorable, e.g. a `.live` / `.com`.
2. Cloudflare Pages → project → **Custom domains → Set up a domain** → enter it
   and follow the DNS steps. SSL is automatic and free.
3. Update these placeholders to your real domain:
   - `index.html` → `<link rel="canonical">` and `og:url`
   - `robots.txt`, `sitemap.xml` → `YOUR-DOMAIN.com`

## 5. Edit your broadcasters

Open `data/broadcasters.json` — this is **yours**. Each country has a list:

```json
"TN": {
  "name": "Tunisia", "flag": "🇹🇳",
  "broadcasters": [
    { "name": "beIN Sports MENA", "type": "tv", "language": "Arabic", "free": false, "url": "https://www.beinsports.com/" }
  ]
}
```

- `type`: `"tv"` or `"stream"`
- `free`: `true` = free-to-air / free streaming (shown with a green badge)
- Add as many countries as you want. Commit & push → site updates.

## 6. Turn on AdSense 💰

1. Apply at <https://adsense.google.com> using your **custom domain** (free
   subdomains are often rejected). You need real content + a privacy policy —
   both are already here.
2. After approval, AdSense gives you a **publisher ID** like
   `ca-pub-1234567890123456`. Find & replace `ca-pub-XXXXXXXXXXXXXXXX`
   everywhere in `index.html`.
3. Create ad units in AdSense, copy each **slot ID**, and replace the
   `data-ad-slot="0000000000"` / `"1111111111"` placeholders in `index.html`.
4. In AdSense → **Sites → Ads.txt**, copy the exact line and paste it into
   `ads.txt` (replacing the placeholder). Redeploy.
5. Update the contact email in `about.html`.

> 💡 AdSense approval tips: have the site live on your domain for a few days
> with real, working content (this site qualifies), make sure About + Privacy
> pages load, and drive a little real traffic before applying.

---

## Local development

```bash
npm i -g wrangler
wrangler pages dev .   # serves the static site + /api/matches at http://localhost:8788
```

Without a key it serves sample data. For live data locally, run with the var:
```bash
FOOTBALL_DATA_API_KEY=your_key wrangler pages dev .
```

## Cost summary

| Item                   | Cost          |
|------------------------|---------------|
| Cloudflare Pages host  | **$0** (unlimited bandwidth) |
| Football API           | **$0** (free tier) |
| Domain                 | ~$10 / year   |
| AdSense                | **$0** (it pays *you*) |

## Notes
- Not affiliated with FIFA. Verify broadcaster rights for your audience.
- Football-data.org free tier is rate-limited (10 req/min); the function caches
  responses for 5 min via `Cache-Control`, which stays well under the limit.
