import {Sorter} from './Sorter';

class LinkedListNode
{
  public data: number;
  public next: null | LinkedListNode = null;

  constructor(inputData: number)
  {
    this.data = inputData;
  }
}

export class LinkedListEngine extends Sorter
{
  public head: null | LinkedListNode = null;
  private linkedList: number[];
  private wasConstructed: boolean;
  public length: number = -1;

  constructor(inputList: number[])
  {
    super();
    this.linkedList = inputList;
    this.length = this.linkedList.length - 1;
    this.wasConstructed = false;
    this.createLinkedList();
  }

  private createLinkedList = (): void =>
  {
    for(let counter: number = 0; counter < this.linkedList.length; counter++)
    {
      this.addNode(this.linkedList[counter])
    }
    this.wasConstructed = true;
  }

  public addNode = (nodeData: number): void =>
  {
    this.length++;
    if(!this.head)
    {
      this.head = new LinkedListNode(nodeData);
    }
    else
    {
      let currentNode: LinkedListNode = this.head;
      while(currentNode.next !== null)
      {
        currentNode = currentNode.next;
      }
      currentNode.next = new LinkedListNode(nodeData)
    }
    if(this.wasConstructed)
    {
      this.linkedList.push(nodeData);
    }
  }

  public getNodeAt(index: number): LinkedListNode
  {
    if(!this.head)
    {
      throw new Error('No Linked List')
    }
    else
    {
      let currentNode: LinkedListNode | null = this.head;
      let currentIndex: number = 0 
      while(currentNode)
      {
        if(index === currentIndex)
        {
          return currentNode;
        }
        currentNode = currentNode.next;
        currentIndex++;
      }
      throw new Error('Index out of bounds')
    }
  }

  public compare(leftIndex: number, rightIndex: number): boolean
  {
    return this.linkedList[leftIndex] > this.linkedList[rightIndex];
  }

  public swap(leftIndex: number, rightIndex: number): void
  {
    let leftNode = this.getNodeAt(leftIndex);
    let rightNode = this.getNodeAt(rightIndex);

    const leftNodeData: number = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftNodeData

    const leftListData: number = this.linkedList[leftIndex];
    this.linkedList[leftIndex] = this.linkedList[rightIndex];
    this.linkedList[rightIndex] = leftListData;
  }

  public printList(): void
  {
    if(!this.head) 
    {
      throw new Error('No linked list to print')
    };

    let currentNode: LinkedListNode | null = this.head;
    let index = 0;
    while(currentNode)
    {
      console.log('----- Printing node at index: ' + index + ' -----')
      console.log('----- Node has value : ' + currentNode.data + ' -----')
      currentNode = currentNode.next;
      index++;
    }
  } 

}