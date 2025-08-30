/**
 * Enforce an allowlist of licenses against license-checker JSON output.
 * Pre-req: run `npx license-checker --json > license-report.json`
 */
const fs = require('fs');
const allowlistPath = 'license-allowlist.json';
const reportPath = 'license-report.json';

if (!fs.existsSync(allowlistPath)) {
  console.error(`Missing ${allowlistPath}`);
  process.exit(1);
}
if (!fs.existsSync(reportPath)) {
  console.error(`Missing ${reportPath} (did you run license-checker first?)`);
  process.exit(1);
}

const allowConfig = JSON.parse(fs.readFileSync(allowlistPath, 'utf8'));
const allowed = new Set(allowConfig.allowedLicenses || []);
const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));

const violations = [];
Object.entries(report).forEach(([pkg, meta]) => {
  // license may be string or array depending on license-checker version
  let licenses = meta.licenses;
  if (!licenses) return;
  if (!Array.isArray(licenses)) licenses = [licenses];
  licenses.forEach(lic => {
    if (!allowed.has(lic)) {
      violations.push({ pkg, license: lic });
    }
  });
});

if (violations.length) {
  console.error('License policy violations detected:');
  violations.forEach(v => console.error(` - ${v.pkg} uses ${v.license}`));
  console.error(
    allowConfig.denyMessage ||
      'One or more dependencies use a license outside the allowlist.'
  );
  process.exit(1);
} else {
  console.log('All dependency licenses conform to allowlist.');
}