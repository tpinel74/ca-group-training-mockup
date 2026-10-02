# CA Group Training mockup

A static HTML mockup of the Group Training section of columbiaassociation.org. It is a design and copy target for Shari to rebuild in WordPress, not production code.

- Live: https://ca-group-training-mockup.pages.dev (Cloudflare Pages)
- Pushing to `main` deploys automatically. Other branches get preview URLs.
- No build step, no frameworks, no npm. Keep it plain HTML, one shared `styles.css`, one shared `site.js`.

## Files

- `index.html` - Group training home
- `move-to-live-more.html`, `tribelife.html`, `trx.html`, `tribefit.html` - program pages
- `notes.html` - build notes and open decisions for Shari
- `styles.css`, `site.js` - shared by every page
- `_redirects` - Cloudflare Pages rule that keeps this file off the live site

The four program pages share one structure. When a change applies to "the program pages", make it on all four and keep them consistent.

## What each page is for (do not change without being asked)

- **Home:** (1) sell group training as a concept, (2) send the visitor to the right program. It has no free-trial form on purpose. Visitors who can't choose go to the "Ask Jodi" form.
- **Program pages:** sell that program and get the visitor to request a free first class with as little friction as possible. Each page reminds people they can explore other formats.
- **Out of scope:** current group training clients (they book in the CA app or portal) and TribeKIDS (one subtle link from the home page only).
- Triage order is gentlest to most intense: Move to Live More, TribeLIFE, TRX, TribeFIT. Keep the nav and the home page rows in this order.

## Conventions

- Never use em dashes. Use a spaced hyphen ( - ) instead.
- Sentence case for headings and buttons. No all-caps labels. No arrows appended to links.
- Write for prospects in plain language. Describe what the visitor gets, not how CA operates.
- The head of group training is **Jodi Kowalczyk** (spelled "Jodi").
- CA palette (in `styles.css` as variables): navy #1C3A6E, green #3A7D3A, light gray #F4F6F8, gold #E8A020. Gold is the primary button color.
- Typeface: Archivo from Google Fonts. Headings use a wider stretch than body text.
- Every page must work on mobile (check around 390px wide) and keep visible keyboard focus.

## Facts

Program facts and pricing come from CA's group training FAQ page:
https://columbiaassociation.org/sports-recreation/personal-training/group-training-programs/faqs/
Do not invent facts, results or statistics. If a requested change needs a fact you don't have, ask.

## Placeholders

- The welcome video, photos, testimonials and forms are placeholders.
- Never write a testimonial quote. Testimonial slots stay marked "to collect" until real quotes are supplied.
- Photo placeholders name the shot needed. Keep that text accurate if a section changes.
- Forms are not connected. `site.js` only shows a confirmation message. Every form carries hidden `program` and `source` fields; keep them when editing forms.

## Open decisions

These are listed in `notes.html`. Don't resolve them silently in copy. If a change settles one, update `notes.html` too:
the free offer (one class or more), the two-business-day response promise, member and non-member routing, who owns follow-up after the class, coverage when Jodi is out, pricing visibility, which clubs run each program, the Move to Live More next step, JumpStart, and where the current registration form goes.

## Working agreement

- Before editing, pull the latest from `main`.
- Summarize what you changed before committing. One logical change per commit, with a plain-English commit message.
- Push only when asked, or when the request says to publish.
