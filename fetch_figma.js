const fs = require('fs');
const https = require('https');

const API_KEY = 'figd_YOUR_TOKEN_HERE';
const FILE_KEY = 'VUGjrVnapTODOYtIyoM64b';

const options = {
  hostname: 'api.figma.com',
  path: `/v1/files/${FILE_KEY}`,
  method: 'GET',
  headers: {
    'X-Figma-Token': API_KEY
  }
};

const req = https.request(options, res => {
  let data = '';
  res.on('data', chunk => {
    data += chunk;
  });
  res.on('end', () => {
    fs.writeFileSync('figma_data.json', data);
    console.log('Figma data saved to figma_data.json');
  });
});

req.on('error', error => {
  console.error('Error fetching figma:', error);
});

req.end();
