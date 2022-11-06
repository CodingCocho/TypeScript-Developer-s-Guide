import {Sorter} from './Sorter';

export class NumbersCollection extends Sorter
{
  public data: number[];
  public length: number;

  constructor(inputData: number[])
  {
    super();
    this.data = inputData;
    this.length = this.data.length;
  }

  compare = (leftIndex: number, rightIndex: number):boolean =>
  {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap = (leftIndex: number, rightIndex: number): void =>
  {
    const leftData = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftData;
  }

}