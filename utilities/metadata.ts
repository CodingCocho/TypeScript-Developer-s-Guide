import 'reflect-metadata'

// const plane =
// {
//   color: 'red'
// };

// Reflect.defineMetadata('note', 'hello world', plane);
// Reflect.defineMetadata('height', 420, plane);

// console.log(plane);

// const note = Reflect.getMetadata('note', plane);
// const height = Reflect.getMetadata('height', plane);

// console.log(note);
// console.log(height);

// Reflect.defineMetadata('note', 'hi', plane, 'color');

// const note = Reflect.getMetadata('note', plane, 'color');
// console.log(note);

@controller
class Plane
{
  color: string = 'red';

  @get('/login')
  fly(): void
  {
    console.log('vrrrrrrrr');
  }
}

function get(path: string)
{
  return function (target: Plane, key: string)
  {
    Reflect.defineMetadata('path', path, target, key)
  }
}

const secret = Reflect.getMetadata('path', Plane.prototype, 'fly');
console.log(secret);

function controller(target: typeof Plane)
{
  // Prototype contains methods only
  for(let key in target.prototype)
  {
    const path = Reflect.getMetadata('path', target.prototype, key);
    const middleware = Reflect.getMetadata('middleware', target.prototype, key);
    console.log(path);

    // router.get(path, middleware, target.prototype[key])
  }
}