# S. B. Ibhadode Technologies

Company website: https://sbi.globalcreest.com/

## Local development and deployment

Use `C:/Users/ASUS/sbibhadodetechnologies` as the single working folder on ASUS. The GitHub repository is `princebelieve/sbibhadodetecchnologies`; the existing remote spelling is retained to preserve the GitHub/Vercel integration.

This is a static HTML/CSS/JavaScript website. No package installation or build step is required. For a local preview, run `python -m http.server 8080` and open `http://localhost:8080/index.html`. Clean production routes such as `/services` are configured in `vercel.json`; use the `.html` paths with the basic local server.

Commit and push to `main` using Git. Vercel deploys the connected GitHub branch automatically; do not maintain a second deployment copy.

## Reconciliation on 2026-11-12

The Documents, Downloads, Desktop, Mac archive metadata and game-workspace staging copies were consolidated into this folder. The older Desktop HTML, CSS and JavaScript matched historical commit `80ecd98` exactly. Its differently encoded screenshot filename had identical bytes to the correctly named image already tracked by GitHub. Temporary staging metadata contained only a source path and checksum. No unique uncommitted website functionality required merging, and the newer remote content was retained. Duplicate project folders and temporary recovery archives were removed after comparison.

## Search visibility checks

On 2026-11-12 the public home, services, contact and game pages returned HTTP 200 with matching canonical URLs and no `noindex` meta/header. `robots.txt` allows crawling and references the accessible six-page sitemap. An unknown URL returned HTTP 404; `/index.html` redirected to `/`.

Introductory copy is now included in the HTML instead of relying solely on JavaScript. Reveal sections remain readable when scripts fail, with animations and reduced-motion support preserved.

These checks do not establish Google's indexed status or exclusion reason. Search Console's URL Inspection report is needed for Google's selected canonical, last crawl, crawl/indexing verdict and exclusion details. Repeated indexing requests do not guarantee indexing.

## Playable preview and video

The homepage now embeds `/save-the-baby/play`; the game landing page embeds the same short promotional preview plus a directly hosted animated gameplay video. `vercel.json` maps the playable route to `playable/index.html`.

The preview uses real game artwork and a separate compact HTML5 match-three implementation. It supports tile swaps, key objectives, cascades, rockets, optional sound and a post-play Google Play action. It is explicitly a preview, not the full Godot game; no demo progress is saved.

Rebuild packages from the game workspace using `python tools/build_playable.py`, then copy `exports/marketing-v9/playable/web/index.html` into this repository's `playable/index.html`. Network-specific ad packages remain in the game workspace. Upload instructions are recorded in the game project's `docs/Playable_Ad_and_Video_Uploads.md`. No ad campaign or advertising spend is initiated by this website.
