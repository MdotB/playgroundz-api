const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const app = express();




const router = require('./routes/event.js');

app.set('port', process.env.PORT || 4004);

app.listen(app.get('port'), () => {
  console.log('up and running')
});
