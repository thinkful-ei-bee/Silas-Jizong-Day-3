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

// between 2 char objects
// grab both of their attack and def
// 

function createCharacter(name, nickname, race, origin, attack, defense){
  return {
    name: name,
    nickname: nickname,
    race: race,
    origin: origin,
    attack: attack,
    defense: defense,
    describe: function(){
      return `${this.name} is a ${this.race} from ${this.origin}.`;
    },
    evaluateFight: function(enemy){
    },
  };
}
