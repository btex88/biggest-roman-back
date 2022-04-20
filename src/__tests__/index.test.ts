// Default libs used throughout the project
import express, { Application } from 'express';
import routes from '../routes';

// Express variable that will manage REST methods
const app: Application = express();

// Takes care of JSON data
app.use(express.json());

// Routes
app.use('/', routes);

export default app;