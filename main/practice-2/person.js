var Person = function (name,age){
      this.name=name;
      this.age=age;
};
Person.prototype.id=function () {
    return 'the id of '+this.name+' is:'+Math.ceil(Math.random()*10000);
 };
Person.prototype.introduce = function()
{
    return 'My name is '+this.name+'. I am '+this.age+' years old.';
};

module.exports=Person