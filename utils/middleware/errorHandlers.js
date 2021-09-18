const boom = require('@hapi/boom');
const { config } = require('../../config');

function withErrorStack(error, stack) {
  if (config.dev !== 'production') {
    console.log('algo pasa \n');
    return { ...error, stack };
  }
  console.log('entonces aqui');
  return error;
}

function logErrors(err, req, res, next) {
  console.error('Esto es entrando al midleware');
  console.log(err);
  next(err);
}

function wrapErrors(err, req, res, next) {
  if (!err.isBoom) {
    next(boom.badImplementation(err));
  }
  next(err);
}

function errorHandler(err, req, res, next) {
  const {
    output: { statusCode, payload },
  } = err;

  res.status(statusCode);
  res.json(withErrorStack(payload, err.stack));
}

module.exports = {
  logErrors,
  errorHandler,
  wrapErrors,
};
