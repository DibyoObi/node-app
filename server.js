'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

app.get('/', (req, res) => {
  res.send('<h1 style="color:red;">ERPl LMS OBI App CICD Full Flow Established 11th March` </h1> \n');
});
