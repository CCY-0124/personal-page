const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'out');
const REPO = 'personal-page';
const TARGET = path.join(OUT, REPO);

fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, '.nojekyll'), '');

fs.mkdirSync(TARGET, { recursive: true });

const exts = new Set([
    '.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg', '.ico',
    '.ttf', '.otf', '.woff', '.woff2', '.eot', '.txt', '.json'
]);

for (const entry of fs.readdirSync(OUT)) {
    const src = path.join(OUT, entry);
    if (fs.statSync(src).isFile() && exts.has(path.extname(entry).toLowerCase())) {
        fs.copyFileSync(src, path.join(TARGET, entry));
    }
}

console.log('Prepared for GitHub Pages: .nojekyll + assets duplicated into /' + REPO);

