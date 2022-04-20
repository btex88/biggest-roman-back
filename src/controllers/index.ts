import { RequestHandler } from 'express';
import { getRomanValues } from '../services';

const handlePostRequest: RequestHandler = (req, res) => {
  const text: string = req.body.text;
  const [status, data] = getRomanValues(text);
  return res.status(status).send(data);
}

export { handlePostRequest };
