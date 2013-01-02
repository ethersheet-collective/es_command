if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(function (require) {
  var Command = function(data){
    this.msg = Command.parse(data);
  };

  Command.parse = function(serialized_msg){
    return JSON.parse(serialized_msg);
  };

  Command.serialize = function(msg){
    return JSON.stringify(msg);
  };
 
  Command.prototype = {
    execute: function(obj,cb){
      var params = this.getParams();
      if(typeof cb === 'function') params.push(cb);
      obj[this.getAction()].apply(obj,params);
    },
    validate: function(){
    },
    getDataType: function(){
      return this.msg.type;
    },
    getDataId: function(){
      return this.msg.id;
    },
    getAction: function(){
      return this.msg.action;
    },
    getParams: function(){
      return this.msg.params;
    },
    getMessage: function(){
      return this.msg;
    }
  };

  return Command;
});
