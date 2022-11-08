import {MatchData} from './MatchData'
import {HtmlReport} from '../reportTargets/HtmlReport'
import {WinAnalysis} from '../analyzers/WinAnalysis'

export interface Analyzer
{
  run(matches: MatchData[]): string 
}

export interface OutputTarget
{
  print(report: string): void
}

export class Summary
{
  public analyzer: Analyzer
  public outputTarget: OutputTarget

  constructor(analyzerInput: Analyzer, outputTarget: OutputTarget)
  {
    this.analyzer = analyzerInput;
    this.outputTarget = outputTarget;
  }

  static winsAnalysisWithHtmlReport(team: string): Summary
  {
    return new Summary(
      new WinAnalysis(team),
      new HtmlReport()
    )
  }

  buildAndPrintReport(matches: MatchData[]): void
  {
    const report = this.analyzer.run(matches);
    this.outputTarget.print(report);
  }
}
