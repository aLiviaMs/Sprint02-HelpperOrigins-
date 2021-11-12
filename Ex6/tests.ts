import { EnumSwitchParadigm } from "./EnumSwitchParadigm";
import { People, lista } from "./ex6";

console.log("Funcional: ");
test(new People(lista, EnumSwitchParadigm.Functional));
console.log(" ");

console.log("Imperativo: ");
test(new People(lista, EnumSwitchParadigm.Imperative));

/**
 * Função para realizar os testes nos paradigmas.
 * 
 * @param peopleTest 
 */
function test(peopleTest: People) {

    console.log("Bio: " + peopleTest.getPersonById(1, "bio"));

    console.log("Nome: " + peopleTest.getPersonById(1, "name"));

    console.log("Antes de apagar Id3: " + peopleTest.getPersonById(3, "bio"));
    peopleTest.deleteById(3);
    console.log("Apagado: " + peopleTest.getPersonById(3, "bio"));

    console.log("Antes de alterar id4: Nome: " + peopleTest.getPersonById(4, "name") + " Bio: " + peopleTest.getPersonById(4, "bio"));

    peopleTest.updateById(4, "liv novo", "bio alterada", "name", "novo nome");
    console.log("Atualizado: Nome:" + peopleTest.getPersonById(4, "name") + " Bio: " + peopleTest.getPersonById(4, "bio"));
}