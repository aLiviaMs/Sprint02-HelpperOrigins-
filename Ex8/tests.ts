import { Person, PersonFactory, lista } from "./main";

const people: Person[] = PersonFactory.createList(lista);

//(A) Imprime pessoa por pessoa da lista.
people.forEach((person: Person) => {
    console.log(`\nid: ${person.id}  \nNome: ${person.name}, \nBiografia: ${person.bio}\n`);
    console.log("______________________________________________________________________\n");
});

/**
 * 
 * @param person 
 * @returns o nome da pessoa que inventou a linguagem ADA.
 */
function adaPerson(people: Person[]): string | undefined {
    return people.find((person: Person) => person.criador.includes("linguagem Ada")).name;
}

console.log("O inventor de ADA foi " + adaPerson(people));
