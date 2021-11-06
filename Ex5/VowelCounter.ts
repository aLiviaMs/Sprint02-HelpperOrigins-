export default class VowelCounter {
    private static Vowels: string[] = ['a', 'e', 'i', 'o', 'u'];

    static count(word: string): number {
        const totalVowels: string[] = word.toLowerCase().split("").filter((letter: string) => this.Vowels.includes(letter));
        return totalVowels.length;
    }
}