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

//for(const item in testObject){
  //console.log(item);
//}

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
];

//for(const person of staff){
  //(person.boss)
    //? console.log(`${person.jobTitle} ${person.name} reports to ${person.boss}.`)
    //: console.log(`${person.jobTitle} ${person.name} doesn't report to anybody.`);
//}

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

//console.log(decodeWord(message));


function createCharacter(name, nickname,race,origin,weapon,attack,defense){
  return {name:name,        
    nickname:nickname,
    race:race,      
    origin:origin,
    weapon:weapon,         
    attack:attack,
    defense:defense,
    describe:function(){
      console.log(`${this.name} is a ${this.race} of ${origin} who uses a ${weapon}.`);
    },
    evaluateFight:function(character){
      let x = this.attack-character.defense;
      let y = character.attack-this.defense;
      return `Your opponent takes ${x<0?0:x} damage and you receive ${y<0?0:y} damage`;
    },
  };
}

let Gandalf = createCharacter('Gandalf the White','gandalf','Wizard','Middle Earth','wizard staff',10,6);
let Bilbo = createCharacter('Bilbo Baggins','bilbo','Hobbit','The Shire','Ring',2,1);
let Aragorn = createCharacter('Aragorn son of Arathorn','aragorn','Man','Dunnedain','Anduril',6,8);
let Legolas = createCharacter('Legolas','Legolas','Elf','Woodland Realm','Bow and Arrow',8,5);
let Arwen = createCharacter('Arwen','Undomiel','Half-Elf','Rivendell','Hadhafang',4,3);

const characterArray = [];
characterArray.push(Gandalf);
characterArray.push(Bilbo);
characterArray.push(Aragorn);
characterArray.push(Legolas);
characterArray.push(Arwen);

//characterArray.find(character => character.name='Arwen').describe();

//const hobbits = characterArray.filter(char => char.race === 'Hobbit');
//const highAttack = characterArray.filter(char => char.attack > 5);

//characterArray.forEach(guy => guy.describe());

//8. BONUS: A Database Search

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr,query){
  let heroKeys = Object.keys(arr[0]);

  if (!('id' in query)){
    if(!('name' in query)){
      if(!('squad' in query)){
        return 'No such property';
      }else{
        let result = arr.find(hero => hero.squad === query.squad);
        return result===undefined?null:result;
      }

      
    }  else {

      return arr.find(hero => hero.name === query.name);
    }

    
  }else{
      if(('id' in query && 'name' in query)){
        let result = arr.find(hero => hero.id === query.id && hero.name ===query.name);
        return result===undefined?null:result;
      }
     let result = arr.find(hero => hero.id === query.id);
     return result===undefined?null:result;
  }
}

// if id not there, use name or squad 
// if id is there, use id. 
// if id and names not there, use squad. 



console.log(findOne(HEROES, { id: 1 }));
console.log(findOne(HEROES, { id: 10 }));
console.log(findOne(HEROES, { id: 2, name: 'Aquaman' }));
console.log(findOne(HEROES, { id: 5, squad: 'Justice League' }));
console.log(findOne(HEROES, { squad: 'Justice League' }));
console.log(findOne(HEROES, { squad: 'Justice' }));