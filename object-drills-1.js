'use strict';

function createMyObject() {
  return {
    foo : 'bar',
    answerToUniverse : 42,
    'olly olly' : 'oxen free',
    sayHello : function(){
      return 'hello';
    },
  };
}

function updateObject(obj){
  obj.foo ='foo';
  obj.bar = 'bar';
  obj.bizz = 'bizz';
  obj.bang = 'bang'
}

function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    fullName: function(){
      return this.firstName + ' ' + this.lastName;
    }
  };
  return person.fullName();
}

const sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang',
};

function keyDeleter(obj) {
  // your code here
  delete obj.foo;
  delete obj.bar;
}
//keyDeleter(sampleObj);


