alert("******************************************\nBoas vindas ao jogo do numero secreto\n******************************************\n");
let numeroMaximo = 200;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1;

    // Enquanto
    while(chute != numeroSecreto){
        chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
        if(chute == numeroSecreto) {
            break;   
        } else {
            if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O numero secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++;
        }
    }

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
    alert(`Parabens você acertou o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

        // if(tentativas > 1){
        //     alert(`Parabens você acertou o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
        // }else{
        //     alert(`Parabens você acertou o numero secreto ${numeroSecreto} com ${tentativas} tentativa`);
        // }