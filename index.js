const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
})

app.get('/*', (req, res) => {
  res.redirect('/');
})

app.listen(6464, () => {
  console.log('Server is running on port 6464');
});