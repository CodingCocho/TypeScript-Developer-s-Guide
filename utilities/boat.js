var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Boat = /** @class */ (function () {
    function Boat() {
        this.color = 'red';
    }
    Object.defineProperty(Boat.prototype, "formattedColor", {
        get: function () {
            return "This boat color is ".concat(this.color);
        },
        enumerable: false,
        configurable: true
    });
    Boat.prototype.pilot = function () {
        throw new Error();
        console.log('swish');
    };
    __decorate([
        testDecorator
    ], Boat.prototype, "color");
    __decorate([
        testDecorator
    ], Boat.prototype, "formattedColor");
    __decorate([
        logError('Something bad')
    ], Boat.prototype, "pilot");
    return Boat;
}());
function testDecorator(target, key) {
    console.log(key);
}
function logError(errorMessage) {
    return function (target, key, desc) {
        var method = desc.value;
        desc.value = function () {
            try {
                method();
            }
            catch (e) {
                console.log(errorMessage);
            }
        };
    };
}
new Boat().pilot();
