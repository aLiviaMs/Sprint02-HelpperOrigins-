import { List } from './List';
import { EnumSwitchParadigm } from './EnumSwitchParadigm';


// Valores no console serão diferente do paradigma Funcional do Imperativo, motivo: No paradigma imperativo o 0 é contado como o valor númerico e fica na lista, enquanto no funcional o 0 é eliminado na lista, mudando assim, a média e o menor valor da lista inserida, porém as contas e a forma de achar os valores pedidos no exercício estão com a lógica correta.

const teste1Funcional = new List(EnumSwitchParadigm.Functional, [1, 2, 3, 4, 5]);
const teste2Funcional = new List(EnumSwitchParadigm.Functional, [1, 2, 3, 4, 5, "hmmm", "56", "0"]);
const teste3Funcional = new List(EnumSwitchParadigm.Functional, ["hmmm", "1", "0"]);
const teste4Funcional = new List(EnumSwitchParadigm.Functional, ["hmmm", "0", "0", 0]);

const teste1Imperativo = new List(EnumSwitchParadigm.Imperative, [1, 2, 3, 4, 5]);
const teste2Imperativo = new List(EnumSwitchParadigm.Imperative, [1, 2, 3, 4, 5, "hmmm", "56", "0"]);
const teste3Imperativo = new List(EnumSwitchParadigm.Imperative, ["hmmm", "1", "0"]);
const teste4Imperativo = new List(EnumSwitchParadigm.Imperative, ["hmmm", "0", "0", 0]);

console.log("Functional: ");
console.log(teste1Funcional.listMinMaxMeanNumbers);
console.log(teste2Funcional.listMinMaxMeanNumbers);
console.log(teste3Funcional.listMinMaxMeanNumbers);
console.log(teste4Funcional.listMinMaxMeanNumbers);

console.log("Imperative: ");
console.log(teste1Imperativo.listMinMaxMeanNumbers);
console.log(teste2Imperativo.listMinMaxMeanNumbers);
console.log(teste3Imperativo.listMinMaxMeanNumbers);
console.log(teste4Imperativo.listMinMaxMeanNumbers);