import { RequestHandler } from 'express';
import { validateInput } from '../helpers';

export const validateRequest: RequestHandler = (req, res, next) => {
  const text: string = req.body.text || '';

  if (validateInput(text)) return next();
  return res
    .status(400)
    .send({ message: 'Input has no letters that matches any roman number' });
};
