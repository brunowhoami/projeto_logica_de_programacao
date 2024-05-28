alert("Boas vindas ao jogo do numero secreto");

let numeroSecreto = 5;
let chute = prompt("Escolha um número entre 1 e 10");

    if(chute == numeroSecreto) {
        alert("Parabens você acertou (5)");
    }else{
        alert("Infelizmente você errou :( ");
    }