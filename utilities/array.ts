const carMakers: string[] = ['ford', 'toyota', 'chevy'];
let carModels: string[] = [];

const carsByMake: string[][] = 
[
  ['1'],
  ['2'],
  ['3']
]

// Help with inference when extracting values
const myCar = carMakers[0];
const myNewCar = carMakers.pop();

// Prevent incompatible values
carMakers.push('semen');

// Help with 'map'
carMakers.map((aMaker: string): string =>
{
  return 'We have the maker: '.concat(aMaker);
})

// Flexible types
const importantDates: (Date | string)[] = [];
importantDates.push('2030-10-10');
importantDates.push(new Date());
// importantDates.push(10);



