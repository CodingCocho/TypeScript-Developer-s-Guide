import fs from 'fs';

export  class CvsFileReader
{
  public data: string[][] = [];
  public filename: string;

  constructor(inputFile : string)
  {
    this.filename = inputFile;
  }

  read(): void 
  {
    this.data = fs.readFileSync(this.filename, 
    {
      encoding: 'utf-8'
    }).split('\n').map((row: string): string[] =>
    {
      return row.split(',')
    })
  }
}