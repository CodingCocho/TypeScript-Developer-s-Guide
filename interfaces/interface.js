var oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary: function () {
        return 'Check '.concat(this.name);
    }
};
var printReport = function (report) {
    console.log(report.summary());
};
var drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary: function () {
        return 'My drink has ' + this.sugar + ' grams of sugar.';
    }
};
printReport(oldCivic);
printReport(drink);
