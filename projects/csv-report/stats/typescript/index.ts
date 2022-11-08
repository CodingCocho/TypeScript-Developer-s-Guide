import fs from 'fs';
// import {MatchReader} from './inheritance/MatchReader';
import {MatchReader} from './interface/MatchReader';
import {Summary} from './interface/Summary';

const matchReader = MatchReader.fromCsv('./docs/football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Man United');
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);

// const reader = new MatchReader('./docs/football.csv');
// reader.read();










