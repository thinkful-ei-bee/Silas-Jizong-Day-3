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
