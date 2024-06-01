alert("Boas vindas ao jogo do numero secreto");

let numeroSecreto = 5;
let chute;

while(chute != numeroSecreto){
    chute = prompt("Escolha um número entre 1 e 10");
    if(chute == numeroSecreto) {
        alert(`Parabens você acertou o numero secreto ${numeroSecreto}`);
    } else {
        if(chute > numeroSecreto){
        alert(`O número secreto é menor que ${chute}`);
    } else {
        alert(`O numero secreto é maior que ${chute}`);
    }
}
}