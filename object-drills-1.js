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

function makeStudentsReport(data) {
  let answer = [];
  for (let i = 0; i < data.length; i ++){
    answer.push(`name: ${data[i].name} , grade: ${data[i].grade}`);
  } return answer;
}

function enrollInSummerSchool(students){
  students.forEach(student => student.status = 'In Summer school' );
  return students;
}

var testData = [
  {
    name: 'Burt',
    status: 'Playing hooky',
    course: 'Biology',
  },
  {
    name: 'Melanie',
    status: 'Sick',
    course: 'Mathematics',
  },
  {
    name: 'Leonard',
    status: 'AWOL',
    course: 'Computer science',
  },];


// console.log(enrollInSummerSchool(testData));

const scratchData = [
  { id: 22, foo: 'bar' },
  { id: 28, foo: 'bizz' },
  { id: 19, foo: 'bazz' },
];

function findById(items, idNum) {
  // your code here
  // filter items, find each object in the array
  // with matching idNum
  // if true, return that object
  return items.filter(obj => obj.id === idNum)[0];
}




function validateKeys(object, expectedKeys){
  let objectKey = Object.keys(object);
  if (!Object.keys(object).length === expectedKeys.length){
      return false;
  }

  for (const key in expectedKeys){
    if(!(key in objectKey)){
      return false;
    }
  }
  return true;
}


