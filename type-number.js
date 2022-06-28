const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero / segundoNumero;

console.log(operacaoMatematica)

// ponto flutuante

const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

const novaOperacao = primeiroNumero / numeroPontoFlutuante;

console.log(novaOperacao);

//NaN - Not A Number (não é um número)

const alura = "Alura";

console.log(alura * primeiroNumero)

// Arrendondando número - Math.round()

var salario = 4200;
var horaTrabalhada = 160;

function ganhoPorHora (salario, horaTrabalhada) {
    
    const salarioHora = (salario/horaTrabalhada);

    return salarioHora;
}

console.log(salarioHora)