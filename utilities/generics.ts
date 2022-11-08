class ArrayOfNumbers
{
  public collection: number[]
  constructor(collection: number[])
  {
    this.collection = collection;
  }

  get(index: number): number
  {
    return this.collection[index]
  }
}

class ArrayOfStrings
{
  public collection: string[]
  constructor(collection: string[])
  {
    this.collection = collection;
  }

  get(index: number): string
  {
    return this.collection[index]
  }
}

class ArrayOfStuff<T> 
{
  public collection: T[]

  constructor(collection: T[])
  {
    this.collection = collection;
  }

  get(index: number): T
  {
    return this.collection[index];
  } 
}

const arr = new ArrayOfStuff<string>(['a', 'b', 'c']);

function printArrayOfStuff<T>(collection: T[]): void 
{
  for(let i = 0; i < collection.length; i++)
  {
    console.log(collection[i]);
  }
}

printArrayOfStuff<string>(arr.collection);

interface Printable
{
  print(): void
}

function printStuff<T extends Printable>(arr: T[]): void
{
  for(let i = 0; i < arr.length; i++)
  {
    arr[i].print();
  }
}