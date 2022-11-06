"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedListEngine = void 0;
const Sorter_1 = require("./Sorter");
class LinkedListNode {
    constructor(inputData) {
        this.next = null;
        this.data = inputData;
    }
}
class LinkedListEngine extends Sorter_1.Sorter {
    constructor(inputList) {
        super();
        this.head = null;
        this.length = -1;
        this.createLinkedList = () => {
            for (let counter = 0; counter < this.linkedList.length; counter++) {
                this.addNode(this.linkedList[counter]);
            }
            this.wasConstructed = true;
        };
        this.addNode = (nodeData) => {
            this.length++;
            if (!this.head) {
                this.head = new LinkedListNode(nodeData);
            }
            else {
                let currentNode = this.head;
                while (currentNode.next !== null) {
                    currentNode = currentNode.next;
                }
                currentNode.next = new LinkedListNode(nodeData);
            }
            if (this.wasConstructed) {
                this.linkedList.push(nodeData);
            }
        };
        this.linkedList = inputList;
        this.length = this.linkedList.length - 1;
        this.wasConstructed = false;
        this.createLinkedList();
    }
    getNodeAt(index) {
        if (!this.head) {
            throw new Error('No Linked List');
        }
        else {
            let currentNode = this.head;
            let currentIndex = 0;
            while (currentNode) {
                if (index === currentIndex) {
                    return currentNode;
                }
                currentNode = currentNode.next;
                currentIndex++;
            }
            throw new Error('Index out of bounds');
        }
    }
    compare(leftIndex, rightIndex) {
        return this.linkedList[leftIndex] > this.linkedList[rightIndex];
    }
    swap(leftIndex, rightIndex) {
        let leftNode = this.getNodeAt(leftIndex);
        let rightNode = this.getNodeAt(rightIndex);
        const leftNodeData = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftNodeData;
        const leftListData = this.linkedList[leftIndex];
        this.linkedList[leftIndex] = this.linkedList[rightIndex];
        this.linkedList[rightIndex] = leftListData;
    }
    printList() {
        if (!this.head) {
            throw new Error('No linked list to print');
        }
        ;
        let currentNode = this.head;
        let index = 0;
        while (currentNode) {
            console.log('----- Printing node at index: ' + index + ' -----');
            console.log('----- Node has value : ' + currentNode.data + ' -----');
            currentNode = currentNode.next;
            index++;
        }
    }
}
exports.LinkedListEngine = LinkedListEngine;
