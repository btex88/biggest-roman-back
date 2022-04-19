import { Request, Response, NextFunction } from 'express';
import { checkInput, validateInput } from '../helpers';

interface express {
  req: Request;
  res: Response;
  next: NextFunction;
}

function handlePostRequest({ req, res, next }: express) {
  const text: string = req.body ?? null;
  if (checkInput(text)) {
    const { status, data } = validateInput(text);
    return res.status(status).send(data);
  }
  return next();
}

function handleError({ req, res }: express) {
  return res.status(status).send(data);
}

export { handlePostRequest, handleError };
