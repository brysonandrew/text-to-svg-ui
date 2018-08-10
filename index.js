const express = require('express');

const app = express();
const PORT = 3000;

const TextToSVG = require('text-to-svg');
const textToSVG = TextToSVG.loadSync();

const attributes = {fill: 'red', stroke: 'black'};
const options = {x: 0, y: 0, fontSize: 72, anchor: 'top', attributes: attributes};

const svg = textToSVG.getSVG('hello', options);

console.log(svg);

app.get('/', (req, res) => {
  res.send(svg)
});

app.listen(PORT, () => {
  console.log('Server is up on port ' + PORT)
});
