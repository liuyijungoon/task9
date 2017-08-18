const Person = require('./person');
let Teacher = function (name,age,clazzes,id){
    this.name=name;
    this.age=age;
    this.clazzes=clazzes;
};
Teacher.prototype = new Person();
Teacher.prototype.constructor=Teacher.prototype;
Teacher.prototype.introduce=function (){
    if(this.clazzes.length===0){
        return new Person(this.name,this.age).introduce()+' I am a Teacher. I teach No Class.';
    }else{
        return new Person(this.name,this.age).introduce()+' I am a Teacher. I teach Class '+this.clazzes[0].number+','+this.clazzes[1].number+'.';
    }
};
Teacher.prototype.isTeaching=function (stuu) {
    for(let eclazz of this.clazzes){
        if(eclazz.hasStudent(stuu)){
            return true;
        }
    }
    return false;
};
Teacher.prototype.hasStudent=function (stuuu,claszz) {
    return claszz.stu===stuuu;
};
Teacher.prototype.notifyStudentAppended=function () {
    for(let eachclass of this.clazzes)
    {
        if(eachclass.stu!==undefined){
            console.log(eachclass.stu.name+" has joined Class "+eachclass.number)
        }
    }
}
Teacher.prototype.notifyLeaderAssigned=function () {
    for(let eachclass of this.clazzes)
    {
        if(eachclass.leader!==undefined){
            console.log(eachclass.leader.name+" become Leader of Class "+eachclass.number)
        }
    }
}
module.exports = Teacher