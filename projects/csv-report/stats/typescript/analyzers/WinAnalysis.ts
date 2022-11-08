import {Analyzer} from '../interface/Summary'
import {MatchData} from '../interface/MatchData';
import {MatchResult} from '../utils';

export class WinAnalysis implements Analyzer
{
  teamName: string;

  constructor(inputTeam: string)
  {
    this.teamName = inputTeam;
  }

  run(matches: MatchData[]): string
  {
    let wins = 0;

    for(let match of matches)
    {
      if(match[1] === this.teamName && match[5] === MatchResult.HomeWin)
      {
        wins++;
      }
      else if(match[2] === this.teamName && match[5] === MatchResult.AwayWin)
      {
        wins++
      }
    }

    return this.teamName + ' has won ' + wins + ' games this season.'
  }
}