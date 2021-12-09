const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const axios = require('axios');

app.use(express.static('dist'));

app.listen(port, () => {
  console.log('we are connected')
});