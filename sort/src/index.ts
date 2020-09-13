import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumberCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// const numberCollection = new NumberCollection([10, 2, -6, 0]);
// const numberSorter = new Sorter(numberCollection);
// numberSorter.sort();
// console.log(numberSorter.collection);

// const characterCollection = new CharactersCollection("daswefcXDefa");
// const stringSorter = new Sorter(characterCollection);
// stringSorter.sort();
// console.log(stringSorter.collection);

const linkedList = new LinkedList();
linkedList.add(100);
linkedList.add(60);
linkedList.add(1000);
linkedList.add(-20);

linkedList.sort();
linkedList.print();

const numberCollection = new NumberCollection([10, 2, -6, 0]);
numberCollection.sort();
console.log(numberCollection.data);

const characterCollection = new CharactersCollection("daswefcXDefa");
characterCollection.sort();
console.log(characterCollection.data);
