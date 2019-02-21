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
jobTitle:'Technician',
boss: 'Josh',
},{
name:'Robby',
jobTitle:'Manager',
boss: 'Josh',
},{
name:'Jacky',
jobTitle:'Accountant',
boss: 'Josh',
},{
name:'Laos',
jobTitle:'Sales Manager',
boss: 'Josh',
},{
name:'Josh',
jobTitle:'Boss'}
]

for(const person of staff){
  (person.boss)
    ? console.log(`${person.jobTitle} ${person.name} reports to ${person.boss}.`)
    : console.log(`${person.jobTitle} ${person.name} doesn't report to anybody.`);
}


// word[0] = first letter (if it's insdie the cpherKey, then it is also the key)
// cpherKey[word[0]] 

let message = 'craft block argon meter bells brown croon droop';

function decode(word){
  const cpherKey = {a:2,b:3,c:4,d:5};
  return (word[0] in cpherKey)?word[cpherKey[word[0]]-1]:' ';
}



function decodeWord(message){
  let wordList = message.split(' ');
  let result = [];
  for(const word of wordList){
    result.push(decode(word));
  }
  return result.join('');
}

console.log(decodeWord(message));


