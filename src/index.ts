import { Sorter } from "./Sorter"
import { NumbersCollection } from "./NumbersCollection"
import { CharactersCollection } from "./CharactersCollection"
import { LinkedList } from "./LinkedList"

const numbers = new NumbersCollection([10,-4,1,-2,6,5])

numbers.sort()
console.log(numbers.data)

const character = new CharactersCollection("Emre")
character.sort()
console.log(character.data)

const linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(-1)
linkedList.add(999)
linkedList.add(15)
linkedList.sort()
linkedList.print()