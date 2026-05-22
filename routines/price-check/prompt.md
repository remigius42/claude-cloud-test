# Price check

## Rules

- Only consider established vendors
- If the delivery takes more than 2 weeks, look for the next best price
- Favor sites like \<www.toppreise.ch> or \<www.galaxus.ch>

## Output format

- `date`: YYYY-MM-DD, the date you are running the check
- `price`: shipping-inclusive, format `CHF 00.00`
- `⬇️⬆️` (history): emoji + % delta vs last entry, e.g. `⬇️ 3%`; `-` on first run
- `⬇️⬆️` (future): emoji only — ⬇️ down, ⬆️ up, ➡️ flat
- `vendor`: link to product page
- `reason`: fact-based, preferably with links to supporting news
- One row per product per run

## Tasks

1. Research the current best price for a
   - RaspberryPi 5 8 GiB and
   - RaspberryPi 5 16 GiB
1. Add a row each to [output.md - history](./output.md#history)
1. Based on the data you just collected, perform a meta-analysis with additional
   web searches to predict the price development over the next week, month and
   6 months. Add a row each to [output.md - future](./output.md#future)
   - `horizon`: the time frame, e.g. week, month, 6 months
1. Send a notification per [§ Notification](#notification)

## Notification

Include for each product:

- product name
- best price (shipping-inclusive, CHF)
- ⬇️⬆️ delta vs last check
