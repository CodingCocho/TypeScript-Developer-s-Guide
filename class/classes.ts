class Vehicle
{

  public color: string;

  // public drive(): void
  // {
  //   console.log('chugga chugga');
  // }

  constructor(color: string)
  {
    this.color = color;
  }

  protected honk(): void
  {
    console.log('chug');
  }

  // startDrivingProcess(): void 
  // {
  //   this.drive();
  // }

}

const myVehicle = new Vehicle('pink');
// myVehicle.drive();
// myVehicle.honk();
console.log(myVehicle.color);

class Car extends Vehicle
{
  
  public name: string;

  constructor(color:string, name:string)
  {
    super(color);
    this.name = name;
  }

  private drive(): void
  {
    console.log('vroom');
  }

  // honk(): void
  // {
  //   console.log('beep')
  // }

  startDrivingProcess(): void 
  {
    this.drive();
    this.honk();
    this.color;
  }

  getName = (): string =>
  {
    return this.name;
  }

}

const myCar = new Vehicle('orange');
const myCar2 = new Car('orange', 'troll');
myCar2.startDrivingProcess();
console.log(myCar2.getName());