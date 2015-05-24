//var http = require('http');
//var port = process.env.port || 1337;
//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(port);
var http = require( 'http' );
var express = require( 'express' );
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var expressSession = require('express-session');
var cookieParser = require('cookie-parser');
var app = express();
 
var controllers = require( './controllers' );

// setup the view engine
//app.engine("ejs",ejsengine); // support master pages
//app.set( "view engine", "ejs" );
//app.set( "view engine", "jade" );
app.set( "view engine", "vash" );

// Opt into Services
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressSession({ secret: "THisIsAliBoard"}));
app.use(flash());

// Set the public static resource folder
app.use (express.static(__dirname + "/public"));


// map the routes
controllers.init(app);

var server = http.createServer( app );
var port = process.env.PORT || 3030;
server.listen( port );