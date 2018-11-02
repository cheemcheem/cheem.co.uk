// npm dependencies
import * as createError from 'http-errors';
import * as express from 'express'; // Make the app run
import * as path from 'path'; // Used to locate directory to serve static
import * as logger from 'morgan'; // Used for pretty logging
import * as bodyParser from 'body-parser'; // Parse incoming requests
import Error from "./shared/error";

// local middleware and routing dependencies
import indexRouter from './routes/index';
import queryRouter from "./routes/query";

export const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Routing
app.use(express.static(path.join(__dirname, 'public')));
app.use('/info', queryRouter);
app.use('/', indexRouter);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use((err: Error, req: express.Request, res: express.Response) => {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');

});

