"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
const Sorter_1 = require("./Sorter");
class NumbersCollection extends Sorter_1.Sorter {
    constructor(inputData) {
        super();
        this.compare = (leftIndex, rightIndex) => {
            return this.data[leftIndex] > this.data[rightIndex];
        };
        this.swap = (leftIndex, rightIndex) => {
            const leftData = this.data[leftIndex];
            this.data[leftIndex] = this.data[rightIndex];
            this.data[rightIndex] = leftData;
        };
        this.data = inputData;
        this.length = this.data.length;
    }
}
exports.NumbersCollection = NumbersCollection;
