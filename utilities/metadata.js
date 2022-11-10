"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
require("reflect-metadata");
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
var Plane = /** @class */ (function () {
    function Plane() {
        this.color = 'red';
    }
    Plane.prototype.fly = function () {
        console.log('vrrrrrrrr');
    };
    __decorate([
        markFunction('/get')
    ], Plane.prototype, "fly");
    return Plane;
}());
function markFunction(secretInfo) {
    return function (target, key) {
        Reflect.defineMetadata('secret', secretInfo, target, key);
    };
}
var secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');
console.log(secret);
function printMetaData(target) {
    // Prototype contains methods only
    for (var key in target.prototype) {
        var secret_1 = Reflect.getMetadata('secret', target.prototype, key);
        console.log(secret_1);
    }
}
