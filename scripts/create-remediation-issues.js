// Placeholder: parse aggregated.sarif and (eventually) create issues.
const fs = require('fs');
const sarifPath = 'aggregated.sarif';
if (!fs.existsSync(sarifPath)) {
  console.log('No aggregated.sarif present; skipping issue creation.');
  process.exit(0);
}
const sarif = JSON.parse(fs.readFileSync(sarifPath,'utf8'));
const findings = [];
(sarif.runs||[]).forEach(run => {
  (run.results||[]).forEach(r => {
    findings.push({
      ruleId: r.ruleId,
      level: r.level,
      message: (r.message&&r.message.text)||'',
      locations: (r.locations||[]).map(l => l.physicalLocation?.artifactLocation?.uri).filter(Boolean)
    });
  });
});

console.log(`(Placeholder) Would create ${findings.length} remediation issues here.`);