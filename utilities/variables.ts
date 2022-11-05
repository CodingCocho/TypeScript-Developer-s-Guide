let apples: number = 5;
apples = 10;

let speed: string = 'fast';
speed = 'slow';

let hasName: boolean = true;
hasName = false;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in object
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car
{
  
}

let car: Car = new Car();

// Object literal
let point: {x: number; y: number} = {
  x: 10,
  y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) =>
{
  console.log(i);
};

const json = '{"x": 10, "y": 20}'
const coordinates: {x: number; y: number} = JSON.parse(json);

console.log(coordinates);

let words: string[] = ['red', 'green', 'blue'];
let foundWord: boolean;

for(let i = 0; i < words.length; i++)
{
  if(words[i] === 'green')
  {
    foundWord = true;
  }
}

let numbers: number[] = [-10, -1, 12];
let numberAboveZero: number[] = [];
let isThere: number | boolean = false;

for(let i: number = 0; i < numbers.length; i++)
{
  if(numbers[i] > 0)
  {
    numberAboveZero.push(numbers[i]);
    isThere = numbers[i];
  }
}
