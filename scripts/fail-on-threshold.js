// Fail if coverage summary (from jest --coverage) is below thresholds.
const fs = require('fs');
const path = 'coverage/coverage-summary.json';
const min = { branches: 80, functions: 80, lines: 85, statements: 85 };

if (!fs.existsSync(path)) {
  console.error('Coverage summary not found at', path);
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(path, 'utf8')).total;
let failed = [];
Object.entries(min).forEach(([k, v]) => {
  const pct = data[k].pct;
  if (pct < v) failed.push(`${k}: ${pct}% < ${v}%`);
});

if (failed.length) {
  console.error('Coverage thresholds not met:\n' + failed.map(f => ' - ' + f).join('\n'));
  process.exit(1);
} else {
  console.log('Coverage thresholds satisfied.');
}