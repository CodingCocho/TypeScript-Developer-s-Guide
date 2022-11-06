"use strict";
class Sorter {
    constructor(input) {
        // Bubble Sort 
        // Space Complexity O(1)
        // Time Complexity O(n^2)
        this.sort = () => {
            const { length } = this.collection;
            // O(n) 
            // n = length of array
            for (let i = 0; i < length; i++) {
                // O(n)
                // n = length of array - i per iteration of i
                // therefore it results in O(n) for all cases
                for (let j = 0; j < length - i - j; j++) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        const leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
            }
        };
        this.collection = input;
    }
}
const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
