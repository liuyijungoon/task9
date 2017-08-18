let Class = function (number,leader){
    this.number=number;

};
Class.prototype.assignLeader=function(leader){
    this.leader=leader;
    if(this.stu===undefined){
        return 'It is not one of us.'
    }else
    {
        return 'Assign team leader successfully.'
    }
};
Class.prototype.appendMember=function (stu) {
    this.stu=stu;
}
Class.prototype.hasStudent=function (stuuu) {
    return this.stu===stuuu;
};
module.exports =Class;