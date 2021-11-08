import { EnumSwitchParadigm } from "./EnumSwitchParadigm";
import { People, lista } from "./ex6";

console.log("Funcional: ");
test(new People(lista, EnumSwitchParadigm.Functional));
console.log(" ");

console.log("Imperativo: ");
test(new People(lista, EnumSwitchParadigm.Imperative));

function test(peopleTest: People) {

    console.log("Bio: " + peopleTest.getPersonById(1, "bio"));

    console.log("Nome: " + peopleTest.getPersonById(1, "name"));

    console.log("Antes de apagar Id3: " + peopleTest.getPersonById(3, "bio"));
    peopleTest.deleteById(3);
    console.log("Apagado: " + peopleTest.getPersonById(3, "bio"));

    console.log("Antes de alterar id4: Nome: " + peopleTest.getPersonById(2, "name") + " Bio: " + peopleTest.getPersonById(2, "bio"));
    peopleTest.updateById(2, lista, "liv novo", "bio alterada", "name", "novo nome");
    console.log("Atualizado: Nome:" + + peopleTest.getPersonById(2, "name") + " Bio: " + peopleTest.getPersonById(2, "bio"));
}