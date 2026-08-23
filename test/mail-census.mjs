/**
 * MAIL ROUTE CENSUS — the durable half of audit F-0056.
 *
 * This finding's route count moved THREE times: filed at one route, corrected to eight,
 * reconciled to seven. Every move came from a grep standing in for an audit. A number in a
 * document drifts; a test does not.
 *
 * THE RULE: every API route file that reaches a mail sender must either
 *   (a) validate the recipient and rate-limit before sending — the marks below, or
 *   (b) appear in EXEMPT with a reason that survives being read aloud.
 *
 * Run: node test/mail-census.mjs   (exit 1 on a gap)
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const SENDER = /resend\.emails\.send|nodemailer|createTransport/;
// The three marks a guarded mail route carries. All are required: the limiter bounds
// volume, the recipient check removes arbitrary-recipient authority, and escaping removes
// content injection. A route with only the limiter is NOT fixed.
const MARKS = {
  rateLimit: /rateLimit\(/,
  recipientCheck: /isPlausibleEmail\(/,
  escaping: /escapeHtml\(|escapeText\(/,
};

/**
 * Routes that reach a sender and legitimately need no marks. A reason, not a name.
 */
const EXEMPT = {
  // ⛔ EMPTIED 2026-08-23 (turn 172). `app/api/lead/route.js` was listed here as
  //    "env-gated AND broken by a resend v4 response-shape mismatch — the caller-addressed
  //    send never fires". ⛔ THAT PREMISE IS FALSE and this repo's own commit 6e55665 says
  //    so: the early return fires only when RESEND_API_KEY is ABSENT, and the key IS present
  //    because sibling routes in the same deployment demonstrably send with it.
  //
  //    ⭐ AND THE SAME COMMIT GUARDED THE ROUTE — escapeHtml/escapeSubject on the body,
  //    reply_to validated, and the confirmation send now requires isPlausibleEmail as well
  //    as the env flag. So the route is GUARDED, not exempt, and this table went on
  //    asserting a refuted reason for a route that had already been fixed.
  //
  //    ⛔ A stale exemption is worse than a missing check: it PASSES the census while
  //    describing behaviour the code no longer has, so removing the guard later would still
  //    read GREEN. An exemption must be re-earned whenever the route changes.
};

function walk(dir) {
  let out = [];
  for (const e of readdirSync(dir)) {
    const full = join(dir, e);
    if (statSync(full).isDirectory()) out = out.concat(walk(full));
    else if (/route\.(js|ts)$/.test(e)) out.push(full);
  }
  return out;
}

let fail = 0;
const rows = [];
for (const file of walk('app/api')) {
  const text = readFileSync(file, 'utf8');
  if (!SENDER.test(text)) continue;
  const rel = file.replace(/^\.\//, '');
  if (Object.prototype.hasOwnProperty.call(EXEMPT, rel)) {
    rows.push([rel, `exempt — ${EXEMPT[rel]}`]);
    continue;
  }
  const missing = Object.entries(MARKS).filter(([, re]) => !re.test(text)).map(([k]) => k);
  if (missing.length) {
    fail += 1;
    rows.push([rel, `MISSING: ${missing.join(', ')}`]);
  } else {
    rows.push([rel, 'guarded']);
  }
}

console.log('\nMAIL ROUTE CENSUS (F-0056)\n');
for (const [f, status] of rows) {
  console.log(`  ${status.startsWith('MISSING') ? '✗' : '✓'} ${f.padEnd(42)} ${status}`);
}
console.log(
  fail === 0
    ? `\nMAIL CENSUS GREEN — ${rows.length} sender-reaching route files, all guarded or explicitly exempt\n`
    : `\n${fail} UNGUARDED mail route(s)\n`,
);
process.exit(fail === 0 ? 0 : 1);
