import {OutputTarget} from '../interface/Summary';

export class ConsoleReport implements OutputTarget
{
  print(report: string): void
  {
    console.log(report);
  }
 }