'use strict';

var express = require('express');
var router = express.Router();
var controller = require('./auth.controller');



/* GET users listing. */

//router.use('/local', require('./local'));
//router.use('/facebook', require('./facebook'));
//router.use('/twitter', require('./twitter'));
//router.use('/google', require('./google'));


router.get('/',controller.index);
router.post('/login', controller.loginCheck);




module.exports = router;

