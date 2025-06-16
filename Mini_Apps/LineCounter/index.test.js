const fs = require('fs');
const path = require('path');
const { countLines } = require('./index'); // Make sure this is the correct path

describe('countLines', () => {
  const testFilePath = path.join(__dirname, 'tempTest.js');
  const fileContent = `// This is a comment
const a = 10; // inline comment

const b = 20;

console.log(a + b); // sum`;

  beforeAll(() => {
    fs.writeFileSync(testFilePath, fileContent);
  });

  afterAll(() => {
    fs.unlinkSync(testFilePath);
  });

  test('correctly counts blank, comment, and code lines', () => {
    const result = countLines(testFilePath);

    expect(result).toEqual({
      blank: 2,
      comments: 1,
      code: 3,
      total: 6,
    });
  });
});
