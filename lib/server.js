// Import lib to allow usage of environment variables
require('dotenv').config();

// Default libs used throughout the project
const { green, magenta, white } = require('colorette');
const express = require('express');
const bodyParser = require('body-parser');

// Express variable that will manage all REST methods
const app = express();

// Variable to set default port that will be used
const PORT = process.env.PORT || 3000;

// Apply bodyparser to express
app.use(bodyParser.json());

// Default main route for whole API
app.use('/');

// Start Express server opening listening port
app.listen(PORT, () => console.log(
  green(`[SUCCESS] - ${white('Listening on port')} ${magenta(PORT)}`),
));
