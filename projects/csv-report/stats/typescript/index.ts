import fs from 'fs';
// import {MatchReader} from './inheritance/MatchReader';
import {CvsFileReader} from './interface/CsvFileReader';
import {MatchReader} from './interface/MatchReader';

const csvFileReader = new CvsFileReader('./docs/football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// const reader = new MatchReader('./docs/football.csv');
// reader.read();






