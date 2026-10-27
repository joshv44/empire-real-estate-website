# Empire Real Estate website

Static site (HTML/CSS/JS, no build step) for **Empire Real Estate LLC**, Crandon, WI. Hosted on GitHub Pages at empirerealestatewi.com (see `CNAME`).

## Quick edits
- **Listings:** edit `listings.js` (add/remove blocks in `EMPIRE_LISTINGS`; recent sales in `EMPIRE_RECENT_SALES`).
- **Team, bios, photos:** edit the "TEAM" section in `index.html`; put headshots in `assets/team/`.
- **Form email:** `CONTACT_EMAIL` at the top of `main.js`, or set `data-endpoint` on each `<form>` to a form-service URL.
- Search `index.html` for `TODO(Josh)` to find everything that still needs input.

## Preview locally
    python3 -m http.server 8000   # then open http://localhost:8000
