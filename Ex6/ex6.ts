import { EnumSwitchParadigm } from "./EnumSwitchParadigm";

export let lista: Array<Person> = [
    {
        id: 1,
        name: "Ada Lovelace",
        bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina",
    },
    {
        id: 2,
        name: "Alan Turing",
        bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia",
    },
    {
        id: 3,
        name: "Nikola Tesla",
        bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.",
    },
    {
        id: 4,
        name: "Nicolau Copérnico",
        bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.",
    },
];

export interface Person {
    id: number,
    name: string,
    bio: string
}

type PersonKeyof = keyof Person;


export class People {
    private list: Array<Person>;
    readonly paradigm: EnumSwitchParadigm;

    constructor(listPeople: Array<Person>, paradigm: EnumSwitchParadigm) {
        this.list = listPeople;
        this.paradigm = paradigm;
    }

    getPersonById(id: number, personKeyof: PersonKeyof): number | string | undefined {
        if (this.paradigm === EnumSwitchParadigm.Functional) {
            const person: Person | undefined = this.list.find((person: Person) => person.id === id)

            if (person)
                return person[personKeyof];
            else
                return undefined;
        } else {
            for (const person of this.list) {
                if (person.id === id)
                    return person[personKeyof];
            }
            return undefined;
        }
    }

    deleteById(id: number): void {
        if (this.paradigm === EnumSwitchParadigm.Functional) {
            this.list = this.list.filter((person: Person) => person.id !== id);
        } else {
            for (let i = 0; i < this.list.length; i++) {
                if (this.list[i].id == id)
                    this.list.splice(i, 1);
            }
        }
    }

    updateById(id: number, name?: string, bio?: string, input?: string, valuePerson?: string): void {
        if (this.paradigm === EnumSwitchParadigm.Functional) {
            const index: number = this.list.findIndex(person => person["id"] === id);

            if (index == -1) {
                console.log("Id doesn't exist, so list can't be updated.");
            } else {
                const nameList: string = this.list[index]["name"] = name;
                const bioList: string = this.list[index]["bio"] = bio;

                name ? nameList : undefined;
                bio ? bioList : undefined;
            }
        } else {
            for (let i = 0; i < this.list.length; i++) {
                if (this.list[i].id === id) {
                    if (input === 'name')
                        this.list[i].name = valuePerson;
                    else if (input === 'bio')
                        this.list[i].bio = valuePerson;
                }
            }
        }
    }

}