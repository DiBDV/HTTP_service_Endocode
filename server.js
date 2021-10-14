import request, { get } from 'supertest';
const express = require('express')();
const app = express();
const PORT = 8080;

app.use (express.json())

app.listen(PORT, () => {
  console.log(`it's alive on http://localhost:${PORT}`);
});

request = request('http://localhost:8080');
get('/').expect(200, function(err){
  console.log(err);
});

//Three HTTP endpoints
app.get('/helloworld', (req, res) => {
  res.send('Hello Stranger');
});

request(app)
    .app('/helloworld')
    .expect('Content-Length', '14')
    .expect(200)
    .end(function(err,res)) {
      if (err) throw err;
    };

app.get('/helloworld?name=AlfredENeumann', (req, res) => {
  res.send('Hello Alfred E Neumann');
});

app.get('/versionz', (req, res) => {
  res.status(200).send({
    gitHash: 'git rev-parse --show-object-format[=(storage|input|output)]:',
    gitProjectName: 'https://github.com/DiBDV/HTTP_service_Endocode'
  });
});
