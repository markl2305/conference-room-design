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
  // Gated behind an unset LEAD_SEND_CONFIRMATION env var AND independently broken by a
  // resend ^4.x response-shape mismatch — the code tests `sendResult.id` while v4 returns
  // {data, error}, so the route 502s before the gated confirmation branch can run. Two
  // independent reasons the caller-addressed send never fires. Verified at origin/main
  // 2026-08-22. Fixing a route that never sends would be inventing a fix.
  'app/api/lead/route.js': 'legacy: confirmation send is env-gated AND broken by a resend v4 response-shape mismatch',
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
