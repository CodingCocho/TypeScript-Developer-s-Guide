import {faker} from '@faker-js/faker';
import {Mappable} from './CustomMap';

export class Company implements Mappable
{
  catchPhrase: string;
  color: string = 'red';
  companyName: string;
  location: 
  {
    lat: number;
    lng: number;
  }

  constructor()
  {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location =
    {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string 
  {
    return `
      <div>
        <h3> Our company is ${this.companyName}</h2>
        <p> Our catch phrase is ${this.catchPhrase}</p>
      </div>
    ` ;
  }
}