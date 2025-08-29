const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'out');
const SUB = 'personal-page'; 
const TARGET_DIR = path.join(OUT, SUB);

function copyDir(src, dest) {
    if (!fs.existsSync(src)) return;
    fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src)) {
        const s = path.join(src, entry);
        const d = path.join(dest, entry);
        const stat = fs.statSync(s);
        if (stat.isDirectory()) copyDir(s, d);
        else fs.copyFileSync(s, d);
    }
}

fs.writeFileSync(path.join(OUT, '.nojekyll'), '');

fs.mkdirSync(TARGET_DIR, { recursive: true });

// Copy all top-level entries into the subfolder, except the subfolder itself
for (const entry of fs.readdirSync(OUT)) {
  if (entry === SUB || entry === '.nojekyll') continue;
  const src = path.join(OUT, entry);
  const dest = path.join(TARGET_DIR, entry);
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    copyDir(src, dest);
  } else {
    fs.copyFileSync(src, dest);
  }
}

console.log('Prepared for GitHub Pages: .nojekyll + assets duplicated into /personal-page');

