"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    constructor() {
        // Bubble Sort 
        // Space Complexity O(1)
        // Time Complexity O(n^2)
        this.sort = () => {
            let swapped = false;
            do {
                swapped = false;
                for (let counter = 0; counter < this.length - 1; counter++) {
                    if (this.compare(counter, counter + 1)) {
                        this.swap(counter, counter + 1);
                        swapped = true;
                    }
                }
            } while (swapped);
        };
    }
}
exports.Sorter = Sorter;
