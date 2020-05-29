var express = require('express');
var app = express();

var router = require('./routers.js');
var URL_building = require('./URL_building.js');
var routers_middleware = require('./routers_middleware.js');
app.use('/test', function(req, res, next){
   console.log("A new request received from test at " + Date.now());
   //This function call is very important. It tells that more processing is
   //required for the current request and is in the next middleware function/route handler.
   next();
});



//both index.js and routers.js should be in same directory
app.use('/router', router);
app.use('/URL_building', URL_building);
app.use('/middleware', routers_middleware);



app.listen(3000);
