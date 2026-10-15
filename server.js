const express = require('express');
const path = require('path');
const app = express();

// Render irratti port akka siif ramaduuf
const PORT = process.env.PORT || 3000;

// Herregaalee (static files) akka index.html fi suuraa tajaajiluuf
app.use(express.static(path.join(__dirname)));

// Karaa jal'a (root URL) index.html galchuuf
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Server hojjechiisi
app.listen(PORT, () => {
  console.log(`Serveriin port ${PORT} irratti hojjechaa jira.`);
});