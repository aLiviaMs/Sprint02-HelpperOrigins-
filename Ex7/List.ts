import { EnumSwitchParadigm } from "./EnumSwitchParadigm";

export class List {
    /**
     * Atributos da classe.
     */
    private _list: any[];
    private readonly _paradigm: EnumSwitchParadigm;

    /**
     * Construtor
     * 
     * @param enumParadigm
     * @param list 
     */
    constructor(enumParadigm: EnumSwitchParadigm, list: any[]) {
        this._paradigm = enumParadigm;
        this._list = this.transformToNumericList(list);
    }

    /**
     * Checa se o item é numérico(caso não será valido na lista) e converte strings de números para o tipo Number.
     * 
     * @returns lista apenas com números.
     */
    private transformToNumericList(list: any[]): number[] {
        if (this._paradigm === EnumSwitchParadigm.Functional) {
            return list.map(Number).filter(Boolean);
        } else {
            for (let i = 0; i < list.length; i++) {
                list[i] = +list[i];
                if (isNaN(list[i])) {
                    list.splice(i, 1);
                    i--;
                }
            }
            return list;
        }
    }

    /**
     * 
     * @returns o maior valor da lista.
     */
    private get maxNumber(): number {
        if (this._paradigm === EnumSwitchParadigm.Functional) {
            return Math.max(...this._list);
        } else {
            let maxValue: number = this._list[0];
            for (let i = 0; i < this._list.length; i++) {
                if (this._list[i] > maxValue)
                    maxValue = this._list[i];
            }
            return maxValue;
        }
    }

    /**
     * 
     * @returns o menor valor da lista.
     */
    private get minNumber(): number {
        if (this._paradigm === EnumSwitchParadigm.Functional) {
            return Math.min(...this._list);
        } else {
            let minValue: number = this._list[0];
            for (let i = 0; i < this._list.length; i++) {
                if (this._list[i] == 0) {
                    minValue = minValue;
                } else if (this._list[i] < minValue) {
                    minValue = this._list[i];
                }
            }
            return minValue;
        }
    }

    /**
     * 
     * @returns soma os valores dos itens da lista e realiza a média do mesmo, caso a lista seja menor igual a zero retorna 0, deixando a lista como undefined.
     */
    private get meanNumber(): number {
        if (this._paradigm === EnumSwitchParadigm.Functional) {
            if (this._list.length <= 0) {
                return 0;
            } else {
                return this._list.reduce((previous: number, current: number) => previous + current) / this._list.length;
            }
        } else {
            // Valores no console serão diferente do paradigma Funcional do Imperativo, motivo: No paradigma imperativo o 0 é contado como o valor númerico e fica na lista, enquanto no funcional o 0 é eliminado na lista, mudando assim, a média e o menor valor da lista inserida, porém as contas e a forma de achar os valores pedidos no exercício estão com a lógica correta.
            if (this._list.length <= 0) {
                return 0;
            } else {
                let sum: number = this._list[0];
                for (let i = 1; i < this._list.length; i++) {
                    sum += this._list[i];
                }
                return sum / this._list.length;
            }
        }
    }


    /**
     * 
     * @return uma lista que contém, respectivamente, o menor valor, o maior valor e a média dos valores da lista. Caso a lista seja menor ou igual 0 será retornado uma string e a lista terá o valor undefined.
     */
    public get listMinMaxMeanNumbers(): number[] | string {
        if (this._list.length <= 0) {
            return "lista vazia";
        } else {
            return [this.minNumber, this.maxNumber, this.meanNumber];
        }
    }

}