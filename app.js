const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')


// const path = require('path');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');
// const cors = require('cors')







// const usersRouter = require('./routes/users');
const guidesRouter = require('./routes/guide-router');
const touristsRouter = require('./routes/tourist-router');
const adminRouter = require('./routes/admin-router');
const loginAndregister= require('./routes/login-Registr-router')
const search=require('./routes/search-router')
const profile=require('./routes/profile-router')
const wathapp = require('./routes/whatsapp')

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Added to serve client static files
app.use(express.static(path.resolve(__dirname, 'client/build')));

// app.use('/api',loginAndregister)
// app.use('/users', usersRouter);
app.use('/api', guidesRouter,touristsRouter,adminRouter,loginAndregister);
// app.use('/api', touristsRouter);
// app.use('/api',adminRouter)
app.use(require('./routes/whatsapp'));
app.use('/api/search',search)
app.use(require('./routes/admin-router'))
app.use('/myProfile',profile)
// catch 404 and forward to error handler
/////
app.use(function(req, res, next) {
  next(createError(404));

});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

