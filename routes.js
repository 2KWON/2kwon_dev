
'use strict';

var errors = require('./components/errors');/**
 * Created by Seokhwan on 2016. 3. 19..
 */
module.exports = function(app) {

    // Insert api below
    app.use('/api/memo', require('./api/memo'));
    app.use('/auth', require('./auth'));

    // All undefined asset or api api should return a 404
    app.route('/:url(api|auth|bin|app|bower_components|assets)/*')
        .get(errors[404]);

    app.use(function(req,res){
        res.status(404);
        app.get(errors[404]);
    })


    // All other api should redirect to the index.html
    app.route('/*')
        .get(function(req, res) {
            res.sendfile(app.get('appPath') + '/index.html');
        });
};