"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinAnalysis = void 0;
const utils_1 = require("../utils");
class WinAnalysis {
    constructor(inputTeam) {
        this.teamName = inputTeam;
    }
    run(matches) {
        let wins = 0;
        for (let match of matches) {
            if (match[1] === this.teamName && match[5] === utils_1.MatchResult.HomeWin) {
                wins++;
            }
            else if (match[2] === this.teamName && match[5] === utils_1.MatchResult.AwayWin) {
                wins++;
            }
        }
        return this.teamName + ' has won ' + wins + ' games this season.';
    }
}
exports.WinAnalysis = WinAnalysis;
