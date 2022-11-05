interface Vehicle
{
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

// Also a vehicle
// interface Vehicle
// {
//   summary(): string;
// }

interface Reportable
{
  summary(): string;
}

const oldCivic =
{
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string
  {
    return 'Check '.concat(this.name)
  }
};

const printReport = (report: Reportable): void =>
{
  console.log(report.summary());
}

const drink =
{
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string 
  {
    return 'My drink has ' + this.sugar + ' grams of sugar.'
  }
}

printReport(oldCivic);
printReport(drink);