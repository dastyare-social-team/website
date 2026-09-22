# PostHog Setup Guide

This project is wired to PostHog for:

- the **waitlist funnel** (landing → CTA → signup — single variant, no A/B test)
- **every button / link / outbound link** tracking
- **session replay**, scroll depth and engagement
- a lightweight **consent gate**

The code already sends all the events below. What's left after cloning is
pointing the app at the shared project (step 1) and running the one-time
dashboard bootstrap (step 2).

This site shares the **Dastyare Social — ORG** project (`581705`) with the
other landing sites. Every dashboard, insight and action this repo provisions
is suffixed ` — Website` (e.g. `Overview — Website`), so suites coexist.

---

## 1. Environment variables

Everything lives in `.env` (copy from `.env.example`):

```
NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN=phc_xxxxx   # from PostHog > Project settings > Project API key
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com   # your region (us.eu...)
```

Notes:

- `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` is the **project** API key (`phc_...`).
  It is public and safe to expose client-side.
- `PH_PERSONAL_API_KEY` (personal key, `phx_...`), `PH_PROJECT_ID` and
  `PH_DEPLOYED_URL` are only used by the dashboard bootstrap
  (`bun run bootstrap:posthog`) and never ship to the browser.

## 2. Bootstrap the Website suite

Run once (re-running is safe — existing objects are found by name and reused):

```
bun run bootstrap:posthog
```

This provisions on the target project:

- **Dashboards** — `Overview — Website`, `Conversion — Website`,
  `Reliability — Website` (+ their insights, see step 4).
- **Actions** — `Waitlist signup — Website`
  (`registration_form_submit_success`) and
  `Waitlist CTA clicked — Website` (`registration_cta_clicked`).
- Enables **session replay** and **heatmaps** products.
- Creates saved heatmaps `Homepage — Website` (`/`) and
  `Creator Studio — Website` (`/creator-studio`).

## 3. Create the funnels

The bootstrap already creates them, but to rebuild by hand go to
**Insights → New insight → Funnel**:

**A. Registration funnel** (the main one — single-variant waitlist):

1. `landing_page_viewed`
2. `registration_cta_clicked`
3. `registration_form_submit_success`

Set the window to 14 days and "Conversion rate = Total". There is no
confirmation-page step: on success the modal button itself reads
"You're on the list —" and the modal closes — no redirect.

**B. Landing engagement** (optional):

1. `$pageview`
2. `scroll_depth_50`
3. `registration_cta_clicked`

**C. CTA performance** (optional):

1. `registration_cta_clicked` (filter by property `cta_location`)
2. `registration_form_submit_success`

This shows which section (hero / value blocks / final-cta / header) converts.

## 4. Full event list

Everything the app currently captures. Use these when building insights.

**Page lifecycle** (auto, from `PageAnalytics`)

| Event | Properties |
| --- | --- |
| `$pageview` | `page`, `pathname`, `search` |
| `$pageleave` | auto from posthog-js |
| `landing_page_viewed` | `page`, `pathname` (fires on `/` and `/creator-studio`) |
| `page_engaged` | `pathname`, `duration_seconds` |
| `scroll_depth_25` / `_50` / `_75` / `_100` | `pathname` |

Note: the site scrolls inside an inner container (`RoutesShell`), not the
window — the scroll listener uses the capture phase so inner-container
scrolls are still tracked.

**Registration flow** (email-only waitlist)

| Event | Properties |
| --- | --- |
| `registration_cta_clicked` | `variant` (always `v1`), `cta_location` (hero / problem / value-block-* / social-proof-* / why-different / how-it-works / final-cta / header) |
| `registration_form_validation_failed` | `reason` (name/email/phone), `stage` (continue/submit) |
| `registration_form_submit_attempt` | `variant`, `cta_location`, `has_phone` |
| `registration_form_submit_success` | `variant`, `cta_location`, `has_phone` |
| `registration_form_webhook_missing` | — |

**Generic clicks** (every button and link, auto from `PostHogProvider`)

| Event | Properties |
| --- | --- |
| `button_clicked` | `text`, `variant`, `pathname`, `page` |
| `link_clicked` | `href`, `link_text`, `pathname` |
| `outbound_link_clicked` | `url`, `link_text`, `pathname` |

**FAQ**

| Event | Properties |
| --- | --- |
| `faq_question_opened` | `question` (q1–q6), `pathname` |

**Errors**

| Event | Properties |
| --- | --- |
| `client_error` | `message`, `filename`, `lineno`, `colno` |
| `client_unhandled_rejection` | `reason` |
| `$exception` (via captureException) | `context`, `variant`, `cta_location` |

**People / user properties** (set with `identify()`)

- `email`, `name`, `registered`, `stage`

## 5. Session replay

Replay is already enabled in `src/lib/posthog.ts` with full masking
(`mask_all_text` + `mask_all_element_attributes`), so emails typed into the
form are hidden.

To watch sessions: PostHog → **Recordings**. Replay only records after the
visitor accepts the consent banner (see step 6).

## 6. Consent

- A small consent banner (`src/components/consent-banner.tsx`) is shown once to
  visitors who have no `posthog_consent` cookie.
- Until they click **Accept**, PostHog runs in opt-out mode: no events, no
  replay, no cookies are sent.
- Clicking **Accept** calls `setPostHogConsent("granted")` and turns capturing
  on for the rest of the session. **Decline** keeps it off.

## 7. Verify it works (dev)

1. Run `bun dev` and open `http://localhost:8028/` (or the port in `package.json`).
2. Accept the consent banner.
3. In the browser console you'll see PostHog debug logs (enabled in dev) with
   `$pageview`, `landing_page_viewed`, and on click `button_clicked` etc.
4. PostHog → **Live events** should show them within seconds.

## 8. Troubleshooting

| Symptom | Fix |
| --- | --- |
| No events at all | Consent not accepted yet (step 6), or `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` empty. |
| Funnel step 1 empty (`landing_page_viewed`) | PageAnalytics not mounted — check `src/app/(routes)/layout.tsx`. |
| `scroll_depth_*` never fires | The scroll listener relies on capture-phase `scroll` events from the inner container — check `PageAnalytics` is mounted and the container scrolls. |
