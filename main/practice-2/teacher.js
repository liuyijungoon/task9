const Person = require('./person');
let Teacher = function (name,age,clazzes,id){
    this.name=name;
    this.age=age;
    this.clazzes=clazzes;
};
Teacher.prototype.introduce=function (){
    if(this.clazzes.length===0){
        return new Person(this.name,this.age).introduce()+' I am a Teacher. I teach No Class.';
    }else{
        return new Person(this.name,this.age).introduce()+' I am a Teacher. I teach Class '+this.clazzes[0].number+','+this.clazzes[1].number+'.';
    }

}

module.exports = Teacher;
