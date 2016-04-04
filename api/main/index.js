'use strict';

var express = require('express');
var router = express.Router();
var controller = require('./main.controller');



/* GET users listing. */



router.get('/',controller.index);
router.post('/getPublist', controller.getPublist);




module.exports = router;

