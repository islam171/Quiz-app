const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, 'tests/base.jpg');
const outputDir = path.join(__dirname, 'tests');

// сколько нужно картинок
const count = 50;

for (let i = 1; i <= count; i++) {
  const dest = path.join(outputDir, `img${i}.jpg`);
  fs.copyFileSync(source, dest);
}