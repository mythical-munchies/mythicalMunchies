const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(express.json());

const client = require('./db/client')
client.connect()

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
