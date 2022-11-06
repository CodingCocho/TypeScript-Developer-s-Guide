"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const NumbersCollection_1 = require("./NumbersCollection");
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0, -8, 9]);
numbersCollection.sort();
console.log(numbersCollection.data);
const charCollection = new CharactersCollection_1.CharactersCollection('basdwertewunjasdf');
charCollection.sort();
console.log(charCollection.data);
const linkedList = new LinkedList_1.LinkedListEngine([1, 8, 2, -4, 10, -7]);
// linkedList.printList();
linkedList.sort();
linkedList.printList();
