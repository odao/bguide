define(function(require, exports, module){
    var $ = require('jquery');
    var _ = require('underscore');
    var BB = require('backbone');
    exports.run = function(){
        $(function(){
           require('./loginview');
           var object = {};
           _.extend(object, BB.Events);
           object.bind('kick', function(who){
               window.alert('I\' ll kick ' + who + '\'s ass!');
           });
           object.trigger('kick', 'lin');
        }); 
    }
});
