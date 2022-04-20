import { RequestHandler } from 'express';
import { checkInput, validateInput } from '../helpers';

export const validateRequest: RequestHandler = (req, res, next) => {
  const text: string = req.body || '';

  if (checkInput(text) && validateInput(text)) return next();
  return res
    .status(400)
    .send({ message: 'Input has no letters that matches any roman number' });
};
