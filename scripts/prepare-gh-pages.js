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

copyDir(path.join(OUT, '_next'), path.join(TARGET_DIR, '_next'));
copyDir(path.join(OUT, 'assets'), path.join(TARGET_DIR, 'assets'));

for (const f of ['favicon.ico', 'robots.txt', 'sitemap.xml']) {
    const src = path.join(OUT, f);
    if (fs.existsSync(src)) fs.copyFileSync(src, path.join(TARGET_DIR, f));
}

console.log('Prepared for GitHub Pages: .nojekyll + assets duplicated into /personal-page');

