import { RequestHandler } from 'express';
import getRomanValues from '../services';

export const handlePostRequest: RequestHandler = (req, res) => {
  const text: string = req.body.text;
  const [status, data] = getRomanValues(text);
  res.status(status).send(data);
  return;
};
