const express = require('express');

const app = express();
const PORT = 3000;

const TextToSVG = require('text-to-svg');

const attributes = {fill: 'black'};
const options = {x: 0, y: 0, fontSize: 72, anchor: 'top', attributes: attributes};


app.get('/', (req, res) => {
  // First argument is URL on web browsers, but it is file path on Node.js.
  TextToSVG.load('./fonts/Enchanted Land.otf', function(err, textToSVG) {
    const svg = textToSVG.getSVG('Lion Tongue', options);
    console.log(svg);
    res.send(svg);
  });
});

app.listen(PORT, () => {
  console.log('Server is up on port ' + PORT)
});
