const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

const bodyParser = require('body-parser');
const axios = require('axios');

app.use(express.static('dist'));
app.use(cors());

app.get('/bible', (req, res) => {
  axios.get('https://devotionalium.com/api/v2')
  .then(result => {
    // console.log('this result', result.data)
    res.send(result.data)
  })
  .catch(err => {
    console.log(err)
  })
})

app.listen(port, () => {
  console.log('we are connected')
});