import express from "express"
import createError from "http-errors"

const customErrors=express.Router();



customErrors.get('/badRequest', (req, res, next) => {
  next(createError(400, 'Bad Request Example'));
});

customErrors.get('/unauthorized', (req, res, next) => {
  next(createError(401, 'Unauthorized Example'));
});

customErrors.get('/forbidden', (req, res, next) => {
  next(createError(403, 'Forbidden Example'));
});

customErrors.get('/notFound', (req, res, next) => {
  next(createError(404, 'This route was not found'));
});

customErrors.get('/serverError', (req, res, next) => {

  throw new Error('Something went wrong on the server');
});

customErrors.get('/success', (req, res) => {
  res.json({ message: 'This is a successful response' });
});

export {customErrors}

