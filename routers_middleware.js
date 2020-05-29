var express = require('express');
var router = express.Router();

// First middleware before response is sent
router.use(function(req, res, next){
   console.log("START");
   next();
});

//Router handler
router.get('/', function(req, res, next){
   console.log("MIDDLE");
   res.send("MIDDLE");
   next();
});

router.use('/', function(req, res){
   console.log("END");
});


//export this router to use in our index.js
module.exports = router;
