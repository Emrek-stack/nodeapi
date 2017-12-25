const express = require('express'),
  exphbs = require('express-handlebars'),
  path = require('path'),
  fs = require('fs'),
  logger = require('morgan'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  register = require('./config/controllerRegister'),
  dotenv = require('dotenv');

//const WEB_CONTROLLER_PATH = '../controllers';
const API_CONTROLLER_PATH = '../controllers/api/';



const app = express();
const port = process.env.PORT || 8080;

//load enviorement variable
dotenv.load();

app.set('port', port);
//app.use(express.static(path.join(__dirname, './dist')));

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: 'views/layouts',
  partialsDir: 'views/partials'
}));
app.set('view engine', '.hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// set logging
app.use(logger('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.get('*', (req, res) => {
//     console.log('Serving ', req.url);
//     res.sendFile(__dirname + '/dist/app.html');
// });

//app.listen(port, () => console.log('Listening on port', port));



// var playersApiV1 = express.Router();
// app.use('/players', playersApiV1);

// var boardsApiV1 = express.Router();
// apiV1.use('/leaderboards', boardsApiV1);

// var PlayersController = require('./controllers/players');
// var pc = new PlayersController(playersApiV1);



var apiRouter = express.Router();
app.use('/api', apiRouter);

var apiV1 = express.Router();
apiRouter.use('/v1', apiV1);

//registerControllers(WEB_CONTROLLER_PATH, app);
//registerControllers(API_CONTROLLER_PATH, apiV1);

//register.register(WEB_CONTROLLER_PATH, app);
register.register(API_CONTROLLER_PATH, apiV1);


// function registerControllers(controllerPath, registerRouter) {
//   // MVC Controllers
//   var controllerList = [];
//   fs.readdirSync(path.join(__dirname, controllerPath)).forEach(function (file) {
//     if (file.substr(-3) === ".js") {
//       var basePath = path.basename(file, ".js");
//       var Controller = require(`./${controllerPath}/${file}`);
//       var router = express.Router();
//       registerRouter.use(`/${basePath}`, router);
//       controllerList[basePath] = new Controller(router);
//     }
//   });
// }




// seed the db for testing
var PlayersService = require('./services/players');
var p1 = PlayersService.addPlayer({
  firstName: 'Ben',
  lastName: 'Sparks',
  displayName: 'Warspawn'
});
var p2 = PlayersService.addPlayer({
  firstName: 'Joe',
  lastName: 'Blow',
  displayName: 'Joey558'
});
var p3 = PlayersService.addPlayer({
  firstName: 'Danny',
  lastName: 'Danger',
  displayName: 'DD83'
});
// var BoardsService = require('./services/boards');
// var b1 = BoardsService.addBoard('Total Score', 1);
// var b2 = BoardsService.addBoard('Times Died', 0);
// var ScoresService = require('./services/scores');
// ScoresService.addScore(b1.id, p1.id, 3000);
// ScoresService.addScore(b1.id, p2.id, 2345);
// ScoresService.addScore(b1.id, p3.id, 15238);
// ScoresService.addScore(b2.id, p1.id, 33);
// ScoresService.addScore(b2.id, p2.id, 7);
// ScoresService.addScore(b2.id, p3.id, 67);


// start the server
var server = app.listen(3000, function () {
  var host = server.address().address;
  host = (host === '::' ? 'localhost' : host);
  var port = server.address().port;

  console.log('listening at http://%s:%s', host, port);
});


// // Swagger Docs
// var swaggerTools = require('swagger-tools');
// // swaggerRouter configuration
// var options = {
//   swaggerUi: '/swagger.json',
//   controllers: './controllers'
// };

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
//var swaggerDoc = require('./swagger.json');

// // Initialize the Swagger middleware
// swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {
//     // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
//     app.use(middleware.swaggerMetadata());

//     // Validate Swagger requests
//     app.use(middleware.swaggerValidator());

//     // Route validated requests to appropriate controller
//     app.use(middleware.swaggerRouter(options));

//     // Serve the Swagger documents and Swagger UI
//     app.use(middleware.swaggerUi());

//     // start the server
//     var server = app.listen(3000, function () {
//         var host = server.address().address;
//         host = (host === '::' ? 'localhost' : host);
//         var port = server.address().port;

//         console.log('listening at http://%s:%s', host, port);
//     });
// });m

// mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/posts');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function () {
//   console.log('DB connected!');
// });