import { IPerson } from "./IPerson";

export const lista: IPerson[] = [
    {
        id: 1,
        name: "Ada Lovelace",
        bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina",
        criador: "primeiro algoritmo",
    },
    {
        id: 2,
        name: "Alan Turing",
        bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificiala",
        criador: "pai da inteligência artificial",
    },
    {
        id: 3,
        name: "Nikola Tesla",
        bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.",
        criador: "projeto do moderno sistema de fornecimento de eletricidade",
    },
    {
        id: 4,
        name: "Nicolau Copérnico",
        bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.",
        criador: "desenvolveu a teoria heliocêntrica",
    },
    {
        id: 5,
        name: "Jean Ichbiah",
        bio: "Jean Ichbiah submeteu um projeto de linguagem rotulado como 'Green' a uma competição para escolher a linguagem de programação integrada do Departamento de Defesa dos Estados Unidos. Quando Green foi selecionado em 1978, ele continuou como designer-chefe da linguagem, agora chamada de 'ADA'.",
        criador: "linguagem Ada",
    }
];


export class Person implements IPerson {
    readonly id: number;
    name: string;
    bio: string;
    criador: string;

    constructor(id: number, name: string, bio: string, criador: string) {
        this.id = id;
        this.name = name;
        this.bio = bio;
        this.criador = criador;
    }
}

export class PersonFactory {
    /**
     * 
     * @param personList 
     * @returns array de objetos com cada pessoa da lista.
     */
    public static createList(personList: IPerson[]): Person[] {
        return personList.map((person: IPerson) => new Person(person.id, person.name, person.bio, person.criador));
    }
}
