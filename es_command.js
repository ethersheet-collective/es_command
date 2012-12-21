if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(function (require) {
  return {
    parse: function(serialized_msg){
      return JSON.parse(serialized_msg);
    },
    serialize: function(msg){
      return JSON.stringify(msg);
    },
    execute: function(obj,msg,cb){
    },
    validate: function(msg){
    }
  }
});
