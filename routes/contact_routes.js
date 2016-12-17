/**
 * Created by Joe on 11/21/16.
 */

var express = require('express');
var router = express.Router();
// View all adresses

// View the address for the given id
router.get('/', function(req ,res){
    res.render('contact');

});


module.exports = router;