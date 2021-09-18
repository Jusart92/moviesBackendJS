const express = require('express');

const app = express();

const { config } = require('./config/index');

const moviesApi = require('./routes/movies');

const {
  logErrors,
  errorHandler,
  wrapErrors,
} = require('./utils/middleware/errorHandlers');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

//body parser
app.use(express.json());
moviesApi(app);

//Catch 404
app.use(notFoundHandler);

//erros midlewares
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function () {
  console.log(`Listenig http://localhost:${config.port}`);
});
