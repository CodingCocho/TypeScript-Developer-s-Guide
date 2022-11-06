import {Sorter} from './Sorter';

export class CharactersCollection extends Sorter
{
  public data: string;
  public length: number;

  constructor(inputData: string)
  {
    super()
    this.data = inputData;
    this.length = this.data.length;
  }

  compare = (leftIndex: number, rightIndex: number):boolean =>
  {
    return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
  }

  swap = (leftIndex: number, rightIndex: number): void =>
  {
    let characters = this.data.split('');
    const leftData = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftData;
    this.data = characters.join('');
  }
}