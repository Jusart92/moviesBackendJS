const { config } = require('../../config');

function withErrorStack(error, stack) {
  if (config.dev !== 'production') {
    console.log('algo pasa \n');
    return { error, stack };
  }
  console.log('entonces aqui');
  return error;
}

function logErrors(err, req, res, next) {
  console.error('Esto es entrando al midleware');
  console.log(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  res.status(err.status || 500);
  res.json(withErrorStack(err.message, err.stack));
}

module.exports = {
  logErrors,
  errorHandler,
};
