var VowelCounter = /** @class */ (function () {
    function VowelCounter() {
    }
    //retorna o tanto de vogais existentes na palavra recebida.
    VowelCounter.count = function (word) {
        var _this = this;
        var totalVowels = word.toLowerCase().split("").filter(function (letter) { return _this.vowels.includes(letter); });
        return totalVowels.length;
    };
    VowelCounter.vowels = ['a', 'e', 'i', 'o', 'u'];
    return VowelCounter;
}());
//(A)
console.log("Helpper Origins possui: " + VowelCounter.count("Helpper Origins") + " vogais.");
//(B)
var form = document.querySelector("#form");
var wordInput = form.elements.namedItem('input');
var span = document.querySelector("#result");
//event listener para quando o input for submetido liberar a resposta no span existente no index.html
form.addEventListener('submit', function (event) {
    event.preventDefault();
    span.innerText = VowelCounter.count(wordInput.value) + " vogais existentes.";
});
