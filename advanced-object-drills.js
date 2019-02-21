'use strict';

const loaf = {
  flour: 300,
  water: 210,
  hydration: function(){
    return (this.water / this.flour) * 100;
  }
};


const testObject ={
  foo:'foo', 
  bar:'bar', 
  fum:'fum', 
  quux:'quux',
  spam:'spam',
};

for(const item in testObject){
  console.log(item);
}

const mealDetector = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'],
};

console.log(mealDetector.meals[3]);

let staff = [
{
name:'John',
jobTitle:'Technician'
},{
name:'Robby',
jobTitle:'Manager'
},{
name:'Jacky',
jobTitle:'Accountant'
},{
name:'Laos',
jobTitle:'Sales Manager'
},{
name:'Josh',
jobTitle:'Boss'}
]

for(const person in staff){
  console.log(`${person.name} is ${person.jobTitle} of SAA crop`);
}


