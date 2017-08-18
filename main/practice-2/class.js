var Class = function (number,leader){
      this.number=number;
};
Class.prototype.assignLeader=function(leader){
    this.leader=leader;
};

module.exports =Class;