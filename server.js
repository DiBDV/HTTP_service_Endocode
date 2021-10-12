const request = require('supertest');
const express = require('express')();
const app = express();
const PORT = 8080;

app.use (express.json())

app.listen(PORT, () => {
  console.log(`it's alive on http://localhost:${PORT}`);
});

request = request('http://localhost:8080');
request.get('/').expect(200, function(err){
  console.log(err);
});

app.get('/helloworld', (req, res) => {
  res.send('Hello Stranger');
});

request(app)
    .app('/helloworld')
    .expect('Content-Length', '14')
    .expect(200)
    .end(function(err,res)) {
      if (err) throw err;
    }

app.get('/helloworld?name=AlfredENeumann', (req, res) => {
  res.send('Hello Alfred E Neumann');
});

app.get('/versionz', (req, res) => {
  res.status(200).send({
    gitHash: 'git rev-parse --show-object-format[=(storage|input|output)]:',
    gitProjectName: ''
  });
});



// // Listen to the App Engine-specified port, or 8080 otherwise
// const PORT = process.env.PORT || 8080; 
// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}...`);
// });
