import { createRequire } from "module";
const require = createRequire(import.meta.url);

import client from './client.js';
import { createTables } from "./db/seed.js";

const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');

app.use(morgan('dev'));
app.use(express.json());

// app.use('/api', require('./api/index.js'));

const init = async () => {
  const port = process.env.PORT || 3000
  app.listen(port, () => console.log(`listening on ${port}`));
  console.log('connecting to db');
  await client.connect();
  console.log('connected to database');
  await createTables();
  console.log('tables made')
};

init();
