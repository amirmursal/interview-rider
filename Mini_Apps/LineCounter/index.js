const fs = require('fs');
const path = require('path');

function countLines(filePath) {
  const ext = path.extname(filePath);
  if (ext !== '.js') {
    throw new Error('Only .js files are supported in this version.');
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  let blank = 0;
  let comments = 0;
  let code = 0;

  for (let line of lines) {
    const trimmed = line.trim();
    if (trimmed === '') {
      blank++;
    } else if (trimmed.startsWith('//')) {
      comments++;
    } else if (trimmed.includes('//')) {
      code++;
    } else {
      code++;
    }
  }

  return { blank, comments, code, total: lines.length };
}

// Run directly via CLI
if (require.main === module) {
  const filePath = process.argv[2];
  if (!filePath) {
    console.error('Usage: node lineCounter.js <source_file.js>');
  } else {
    const result = countLines(filePath);
    console.log(`Blank: ${result.blank}`);
    console.log(`Comments: ${result.comments}`);
    console.log(`Code: ${result.code}`);
    console.log(`Total: ${result.total}`);
  }
}

module.exports = { countLines };
