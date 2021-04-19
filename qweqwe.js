const fs = require('fs');

const text = 'hi';
fs.writeFile('./text.txt', text, (err) => {
  if (err) throw err;
  console.log('sucess!');
});