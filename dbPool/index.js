/**
 * Created by Seokhwan on 2016. 3. 24..
 */
var generic_pool = require('generic-pool');
var mysql = require('mysql');


var pool = generic_pool.Pool({
    name: 'mysql',
    create: function(callback) {
        var config = {
            host : 'localhost',
            port : '3306',
            user : 'hwani163',
            password : '1234qwer',
            database : 'hwani163'
        }
        var client = mysql.createConnection(config);
        client.connect(function (error){
            if(error){
                console.log(error);
            }
            callback(error, client);
        });
    },
    destroy: function(client) {
        client.end();
    },
    min: 1,
    max: 10,
    idleTimeoutMillis : 30000,
    log : false
});

process.on("exit", function() {
    pool.drain(function () {
        pool.destroyAllNow();
    });
});


module.exports = pool;