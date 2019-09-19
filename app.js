require('dotenv');
const createError = require('http-errors');
const express = require('express');
const Raven = require('raven');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const enforce = require('express-sslify');

const app = express();

const indexRouter = require('./routes/index');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// The raven request handler must be the first middleware on the app
app.use(Raven.requestHandler());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: false }));

// Enforces HTTPS
app.use(enforce.HTTPS({ trustProtoHeader: true }));

//= =====ROUTES=============
app.use('/', indexRouter);

//= =====================================
//= ===========ERROR HANDLERS============
//= =====================================

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

const port = 1337;

app.listen(port, () => {
  console.log(`Listening on Port 1337!`);
  // (async function() {
  //   const url = await ngrok.connect(port);
  //   opener(url)
  // })()
  console.log(path.join(__dirname, 'views'));
});

module.exports = app;
