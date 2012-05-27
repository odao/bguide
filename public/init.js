/**
 * application init.
 */
seajs.config({
    base: 'http://localhost/',
    alias: {
        'es5-safe': 'lib/es5-safe/0.9.2/es5-safe-debug',
        'json': 'lib/json/1.0.0/json-debug',
        'cookie': 'lib/cookie/1.0.0/cookie-debug',
        'querystring': 'lib/querystring/1.0.2/querystring-debug',
        'underscore': 'lib/underscore/1.3.3/underscore-debug',
        'backbone': 'lib/backbone/0.9.2/backbone-debug',
        'mustache': 'lib/mustache/0.5.0-dev/mustache-debug',
        'jquery': 'lib/jquery/1.7.2/jquery-debug'
    },
    map: [
        [ /^(.*\/src\/.*\.(?:css|js))(?:.*)$/i, '$1?20120528' ]
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
