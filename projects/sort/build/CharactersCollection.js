"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharactersCollection extends Sorter_1.Sorter {
    constructor(inputData) {
        super();
        this.compare = (leftIndex, rightIndex) => {
            return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
        };
        this.swap = (leftIndex, rightIndex) => {
            let characters = this.data.split('');
            const leftData = characters[leftIndex];
            characters[leftIndex] = characters[rightIndex];
            characters[rightIndex] = leftData;
            this.data = characters.join('');
        };
        this.data = inputData;
        this.length = this.data.length;
    }
}
exports.CharactersCollection = CharactersCollection;
