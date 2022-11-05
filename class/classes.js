var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    // public drive(): void
    // {
    //   console.log('chugga chugga');
    // }
    function Vehicle(color) {
        this.color = color;
    }
    Vehicle.prototype.honk = function () {
        console.log('chug');
    };
    return Vehicle;
}());
var myVehicle = new Vehicle('pink');
// myVehicle.drive();
// myVehicle.honk();
console.log(myVehicle.color);
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(color, name) {
        var _this = _super.call(this, color) || this;
        _this.getName = function () {
            return _this.name;
        };
        _this.name = name;
        return _this;
    }
    Car.prototype.drive = function () {
        console.log('vroom');
    };
    // honk(): void
    // {
    //   console.log('beep')
    // }
    Car.prototype.startDrivingProcess = function () {
        this.drive();
        this.honk();
        this.color;
    };
    return Car;
}(Vehicle));
var myCar = new Vehicle('orange');
var myCar2 = new Car('orange', 'troll');
myCar2.startDrivingProcess();
console.log(myCar2.getName());
