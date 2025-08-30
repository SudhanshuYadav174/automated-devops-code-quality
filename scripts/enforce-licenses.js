const fs = require('fs');
const licenseReportPath='license-report.json';
const policyPath='license-allowlist.json';

if(!fs.existsSync(licenseReportPath)||!fs.existsSync(policyPath)){ 
  console.error('Missing license report or policy');
  process.exit(1);
}

const report=JSON.parse(fs.readFileSync(licenseReportPath,'utf8'));
const policy=JSON.parse(fs.readFileSync(policyPath,'utf8'));

const allowed=new Set(policy.allowedLicenses);
let violations=[];

Object.entries(report).forEach(([pkg,meta])=>{
  let lic=meta.licenses;
  if(Array.isArray(lic)) lic=lic.join(' OR ');
  const components=lic.split(/[\s()*|&/]+/).filter(Boolean);
  const ok=components.some(c=>allowed.has(c));
  if(!ok) violations.push({package:pkg, license:lic});
});

if(violations.length){
  console.error('License policy violations:');
  violations.forEach(v=>console.error(` - ${v.package} : ${v.license}`));
  console.error(policy.denyMessage);
  process.exit(1);
} else {
  console.log('All licenses conform to policy.');
}