const Person = require('./person');
const Class = require('./class');
let Student = function (name,age,clazz){
    this.name=name;
    this.age=age;
    this.clazz=clazz;
};
Student.prototype = new Person();
Student.prototype.constructor=Student.prototype;
Student.prototype.introduce=function (){
    if(this.clazz.stu===undefined){
        return new Person(this.name,this.age).introduce()+' I am a Student. '+"I haven't been allowed to join Class.";
    }
    else if(this.clazz.leader===undefined)
    {
        return new Person(this.name,this.age).introduce()+' I am a Student. '+'I am at Class '+this.clazz.number+'.';
    }else{
        return new Person(this.name,this.age).introduce()+' I am a Student.'+' I am Leader of Class '+this.clazz.number+'.';
    }
};
module.exports = Student;