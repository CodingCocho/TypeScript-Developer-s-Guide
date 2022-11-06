import {CharactersCollection} from './CharactersCollection';
import {LinkedListEngine} from './LinkedList';
import {NumbersCollection} from './NumbersCollection';
import {Sorter} from './Sorter';

const numbersCollection = new NumbersCollection([10, 3, -5, 0, -8, 9]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charCollection = new CharactersCollection('basdwertewunjasdf');
charCollection.sort();
console.log(charCollection.data);

const linkedList = new LinkedListEngine([1,8,2,-4,10,-7]);
// linkedList.printList();
linkedList.sort();
linkedList.printList();
