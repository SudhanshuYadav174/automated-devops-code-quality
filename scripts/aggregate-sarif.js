// Merge multiple SARIF files into one (simplified).
const fs = require('fs');
const glob = require('glob');

const files = glob.sync('**/*.sarif', { ignore: ['node_modules/**', 'coverage/**'] });
if (!files.length) {
  console.log('No SARIF files found.');
  process.exit(0);
}

let base = null;
files.forEach(f => {
  const sarif = JSON.parse(fs.readFileSync(f, 'utf8'));
  if (!base) {
    base = sarif;
  } else {
    (sarif.runs || []).forEach(run => base.runs.push(run));
  }
});

fs.writeFileSync('aggregated.sarif', JSON.stringify(base, null, 2));
console.log('Wrote aggregated.sarif with', base.runs.length, 'runs.'),