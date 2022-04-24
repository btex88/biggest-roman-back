// Import lib to allow usage of environment variables
import 'dotenv/config';

// Default libs used throughout the project
import { green, magenta, white } from 'colorette';
import express, { Application } from 'express';
import cors from 'cors';
import routes from './routes';

// Express variable that will manage REST methods
const app: Application = express();

// Variable to set default port that will be used
const PORT: any = process.env.PORT ?? 8080;

// Takes care of CORS middleware
app.use(cors());

// Takes care of JSON data
app.use(express.json());

// Routes
app.use('/', routes);

// Server
app.listen(PORT, () =>
  console.log(green(`[SUCCESS] - ${white('Listening on port')} ${magenta(PORT)}`)),
);
