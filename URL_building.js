var express = require('express');
var router = express.Router();

router.get('/:id([0-9]{3})', function(req, res){
   res.send('The id you specified is: ' + req.params.id);
});


router.get('/:group/:id', function(req, res){
   res.send('El grupo: ' + req.params.group + ' tiene el id - ' + req.params.id);
});

router.get('*', function(req, res){
   res.send('404 desde URL_building');
});


//export this router to use in our index.js
module.exports = router;
