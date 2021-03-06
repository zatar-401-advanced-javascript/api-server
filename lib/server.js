'use strict';
// ---------------------------------------------------------------------------
// Dependencies
const express = require('express');
require('dotenv').config();
const notFoundHandler = require('./middleware/404');
const errorHandler = require('./middleware/500');
const timestamp = require('./middleware/timestamp');
const logger = require('./middleware/logger');
const cors = require('cors');
const app = express();
const v1Router = require('../routes/api-v1');
// ---------------------------------------------------------------------------
// Middleware
app.use(cors());
app.use(express.json());
app.use(timestamp);
app.use(logger);
// ---------------------------------------------------------------------------
// Routes
app.use('/api/v1', v1Router);

app.get('/bad', (req, res) => {
  throw new Error('a 505 test error');
});
// ---------------------------------------------------------------------------
// Handlers
app.use('*', notFoundHandler);
app.use(errorHandler);
// ---------------------------------------------------------------------------

module.exports = {
  server: app,
  start: (port) => {
    port = process.env.PORT || port;
    app.listen(port, () => {
      console.log(`up and running on ${port}`);
    });
  },
};