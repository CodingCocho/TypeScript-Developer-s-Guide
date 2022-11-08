import fs from 'fs';
import {dateStringToDate, MatchResult} from '../utils';

export abstract class CvsFileReader<T>
{
  public data: T[] = [];
  public filename: string;

  constructor(inputFile : string)
  {
    this.filename = inputFile;
  }

  abstract mapRow(row: string[]): T;

  read(): void 
  {
    this.data = fs.readFileSync(this.filename, 
    {
      encoding: 'utf-8'
    }).split('\n').map((row: string): string[] =>
    {
      return row.split(',')
    })
    .map(this.mapRow)
  }
}