
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Website running on port ${PORT}`);
});

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`College website is running on port ${PORT}`);
});

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Fuula website keessaa faayilota dhiyeessi
app.use(express.static(__dirname));

// Fuula jalqabaa website
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Server jalqabi
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
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