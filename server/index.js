const express = require('express');
const path = require('path')
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(express.json());

const client = require('./db/client')
client.connect()

app.use('/', express.static(path.join(__dirname, '../client/dist')))
app.get('/', (req, res)=> res.sendFile(path.join(__dirname, '../client/dist/index.html')));

app.use('/mythicalMunchies', require('./api'));

app.use((err, req, res, next)=> {
  console.log(err)
  res.status(err.status || 500).send({error: err.message ?  err.message : err})
})

const init = async () => {
  const port = process.env.PORT || 3000
  app.listen(port, () => console.log(`listening on ${port}`));
};

init();
