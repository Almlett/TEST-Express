var express = require('express');
var router = express.Router();

router.use( function(req, res, next){
   console.log("A new request received from index at " + Date.now());
   //This function call is very important. It tells that more processing is
   //required for the current request and is in the next middleware function/route handler.
   next();
});


router.get('/', function(req, res){
   res.send('GET from routers.js');
});

router.post('/', function(req, res){
   res.send('POST from routers.js \n');
});

router.get('*', function(req, res){
   res.send('404 desde router');
});


//export this router to use in our index.js
module.exports = router;
