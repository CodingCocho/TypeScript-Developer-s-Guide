var ArrayOfNumbers = /** @class */ (function () {
    function ArrayOfNumbers(collection) {
        this.collection = collection;
    }
    ArrayOfNumbers.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfNumbers;
}());
var ArrayOfStrings = /** @class */ (function () {
    function ArrayOfStrings(collection) {
        this.collection = collection;
    }
    ArrayOfStrings.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfStrings;
}());
var ArrayOfStuff = /** @class */ (function () {
    function ArrayOfStuff(collection) {
        this.collection = collection;
    }
    ArrayOfStuff.prototype.get = function (index) {
        return this.collection[index];
    };
    return ArrayOfStuff;
}());
var arr = new ArrayOfStuff(['a', 'b', 'c']);
function printArrayOfStuff(collection) {
    for (var i = 0; i < collection.length; i++) {
        console.log(collection[i]);
    }
}
printArrayOfStuff(arr.collection);
