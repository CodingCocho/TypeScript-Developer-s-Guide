"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const HtmlReport_1 = require("../reportTargets/HtmlReport");
const WinAnalysis_1 = require("../analyzers/WinAnalysis");
class Summary {
    constructor(analyzerInput, outputTarget) {
        this.analyzer = analyzerInput;
        this.outputTarget = outputTarget;
    }
    static winsAnalysisWithHtmlReport(team) {
        return new Summary(new WinAnalysis_1.WinAnalysis(team), new HtmlReport_1.HtmlReport());
    }
    buildAndPrintReport(matches) {
        const report = this.analyzer.run(matches);
        this.outputTarget.print(report);
    }
}
exports.Summary = Summary;
