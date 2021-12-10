let valueOne = 1, valueTwo = 2, valueThree= 3, temp; 

console.log("valueOne: " + valueOne);
console.log("valueTwo: " + valueTwo);
console.log("valueThree: " + valueThree);

temp = valueTwo;
valueTwo = valueThree;
valueThree = valueOne;
valueOne = temp;

console.log("valueOne: " + valueOne);
console.log("valueTwo: " + valueTwo);
console.log("valueThree: " + valueThree);
