/**
 * application init.
 */
seajs.config({
    base: 'http://localhost:9999/',
    alias: {
        'es5-safe': 'lib/es5-safe/0.9.0/es5-safe-debug',
        'json': 'lib/json/1.0.0/json-debug',
        'cookie': 'lib/cookie/1.0.0/cookie-debug',
        'querystring': 'lib/querystring/1.0.0/querystring-debug',
        'underscore': 'lib/underscore/1.1.7/underscore-debug',
        'backbone': 'lib/backbone/0.5.3/backbone-debug',
        'mustache': 'lib/mustache/0.3.1/mustache-debug',
        'jquery': 'lib/jquery/1.6.2/jquery-debug'
    },
    map: [
        [ /^(.*\/src\/.*\.(?:css|js))(?:.*)$/i, '$1?20120307' ]
    ],
    preload: [
        Function.prototype.bind ? '': 'es5-safe',
        this.JSON ? '' : 'json'
    ],
    charset: 'utf-8',
    timeout: 20000,
    debug: 0
});

define(function(require, exports, module){
    var app = require('./application');
    app.run();
});
