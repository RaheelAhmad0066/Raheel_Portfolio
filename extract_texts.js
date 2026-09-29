const fs = require('fs');

const data = JSON.parse(fs.readFileSync('figma_data.json', 'utf8'));

let texts = [];

function extractTexts(node) {
  if (node.type === 'TEXT') {
    texts.push({ name: node.name, characters: node.characters });
  }
  if (node.children) {
    node.children.forEach(extractTexts);
  }
}

// Start from the first page's first frame if possible
const document = data.document;
extractTexts(document);

fs.writeFileSync('extracted_texts.json', JSON.stringify(texts, null, 2));
console.log('Extracted ' + texts.length + ' text nodes.');
