import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumberCollection";
import { CharactersCollection } from "./CharactersCollection";

const numberCollection = new NumberCollection([10, 2, -6, 0]);
const numberSorter = new Sorter(numberCollection);
numberSorter.sort();
console.log(numberSorter.collection);

const characterCollection = new CharactersCollection("daswefcXDefa");
const stringSorter = new Sorter(characterCollection);
stringSorter.sort();
console.log(stringSorter.collection);
