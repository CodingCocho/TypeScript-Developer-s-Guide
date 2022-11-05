import {faker} from '@faker-js/faker';
import {Mappable} from './CustomMap';
export class User implements Mappable
{
  color: string = 'orange';
  location:
  {
    lat: number;
    lng: number;
  };
  name: string;

  constructor()
  {
    this.name = faker.name.firstName();
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
        <h3>The person that lives here is ${this.name}</h3>
      </div>
    `; 
  }
}