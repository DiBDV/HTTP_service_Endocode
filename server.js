const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Stranger');
});

app.get('/helloworld', (req, res) => {
  res.send('Hello Stranger');
});

app.get('/helloworld?name=AlfredENeumann', (req, res) => {
  res.send('Hello Alfred E Neumann');
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
