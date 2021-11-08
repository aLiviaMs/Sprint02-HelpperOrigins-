class VowelCounter {
    private static vowels: string[] = ['a', 'e', 'i', 'o', 'u'];

    //retorna o tanto de vogais existentes na palavra recebida.
    static count(word: string): number {
        const totalVowels: string[] = word.toLowerCase().split("").filter((letter: string) => this.vowels.includes(letter));
        return totalVowels.length;
    }
}

//(A)
console.log(`Helpper Origins possui: ${VowelCounter.count("Helpper Origins")} vogais.`);

//(B)
const form: HTMLFormElement = document.querySelector("#form") as HTMLFormElement;
const wordInput: HTMLInputElement = form.elements.namedItem('input') as HTMLInputElement;
const span: HTMLSpanElement = document.querySelector("#result") as HTMLSpanElement;

//event listener para quando o input for submetido liberar a resposta no span existente no index.html
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    span.innerText = `${VowelCounter.count(wordInput.value)} vogais existentes.`;
});
