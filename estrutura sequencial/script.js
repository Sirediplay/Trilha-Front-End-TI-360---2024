
// 1 Escreva um algoritmo em Javascript que dado (atribuição) três números inteiros e positivos (A, B, C) e calcule a seguinte expressão: X = A + B / C. Exiba o resultado no console.

// Atribuição dos valores

let A = 5; 
let B = 10; 
let C = 2; 
// Cálculo da expressão
let X = A + B / C;

console.log("O resultado é: " + X);




//2 - Faça um algoritmo em Javascript que dada (atribuição) as 3 notas de um aluno, calcule amédia final deste aluno. Considerar que a média é ponderada e que o peso das notas é: 2, 3 e 5, respectivamente. Exiba o resultado no console. (lembrando que na média ponderada os valores são multiplicados pelos pesos) Exemplo: nota1 = 6, nota2 = 8, nota3 = 9, Resultado: 8.1

// Atribuição das notas e pesos
let nota1 = 6, nota2 = 8, nota3 = 9;

// Cálculo da média ponderada
let mediaPonderada = ("nota1" * 2 + "nota2 "* 3 + "nota3" * 5) / 10;

// Exibição do resultado no console
console.log("A média ponderada é: " + mediaPonderada.toFixed(1));



//3 - Faça um algoritmo em Javascript que dê (atribuição) o tempo de duração de um evento em uma fábrica expressa em segundos e mostre o resultado no console expresso em horas, minutos e segundos.


const segundosEvento = 12345; // Substitua pelo tempo real do evento
const horas = Math.floor(segundosEvento / 3600);
const minutos = Math.floor((segundosEvento % 3600) / 60);
const segundosRestantes = segundosEvento % 60;

console.log(`Duração do evento: ${horas} horas, ${minutos} minutos e ${segundosRestantes} segundos.`);


//4 - Escreva um algoritmo em Javascript que calcule a área de um triângulo equilátero.


const lado = 8; // Substitua pelo valor real do lado do triângulo

// Calcula a área
const area = (lado ** 2 * Math.sqrt(3)) / 4;

console.log(`A área do triângulo equilátero é ${area.toFixed(2)} unidades de área.`);


//5 - Escreva um algoritmo em Javascript que dê (atribuição) três números inteiros e positivos (A, B, C) e calcule a seguinte expressão: X = (A + B)² + C. Exiba o resultado no console. Exemplo : A = 2, B = 2, C = 4, Resultado : X = 20

const j = 2; 
const g = 2; 
const l = 4; 

const h = (j + g) ** 2 + g;

console.log(`Resultado: X = ${h}`);



//6 - Escreva um algoritmo em Javascript que dê um valor para escrever no console o dobro do seu antecessor. Exemplo : Fornecendo o valor 3, Resultado : 4


const numero = 3; // Substitua pelo valor real

// Calcula o antecessor
const antecessor = numero - 1;

// Calcula o dobro do antecessor
const dobroAntecessor = antecessor * 2;

console.log(`O dobro do antecessor de ${numero} é ${dobroAntecessor}.`);


//7 - Escreva um algoritmo em Javascript que dê o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcule e escreva o percentual que cada um representa em relação ao total de participantes. Exiba o resultado no console.


const totalEleitores = 1000; // Substitua pelo número real de eleitores
const votosBrancos = 150; // Substitua pelo número real de votos brancos
const votosNulos = 50; // Substitua pelo número real de votos nulos
const votosValidos = 800; // Substitua pelo número real de votos válidos

// Cálculo dos percentuais
const percBrancos = (votosBrancos / totalEleitores) * 100;
const percNulos = (votosNulos / totalEleitores) * 100;
const percValidos = (votosValidos / totalEleitores) * 100;

console.log(`Total de eleitores: ${totalEleitores}`);
console.log(`Votos brancos: ${votosBrancos} (${percBrancos.toFixed(2)}%)`);
console.log(`Votos nulos: ${votosNulos} (${percNulos.toFixed(2)}%)`);
console.log(`Votos válidos: ${votosValidos} (${percValidos.toFixed(2)}%)`);



//8 - O custo ao consumidor de um carro novo é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a porcentagem do distribuidor seja de 30% e os impostos de 45%, escreva um algoritmo em Javascript que dê (atribuição) o custo de fábrica de um carro e escreva, no console o custo ao consumidor.

function calcularCustoAoConsumidor(custoFabrica) {
    var percentualDistribuidor = 0.30; // 30%
    var impostos = 0.45; // 45%

    var custoDistribuidor = custoFabrica * percentualDistribuidor;
    var custoImpostos = custoFabrica * impostos;

    var custoConsumidor = custoFabrica + custoDistribuidor + custoImpostos;

    console.log("O custo ao consumidor é: " + custoConsumidor);
}

// Exemplo de uso:
calcularCustoAoConsumidor(50000); // Insira aqui o custo de fábrica



//9 – Escreva um algoritmo em Javascript capaz de segundo calcular as raízes de uma proposta de grau, levando em conta que o delta sempre será positivo.



var a = 1; // Coeficiente a
var b = -3; // Coeficiente b
var c = 2; // Coeficiente c

var delta = b * b - 4 * a * c;

if (delta < 0) {
    console.log("Delta é negativo, a equação não possui raízes reais.");
} else {
    var raizDelta = Math.sqrt(delta);
    var raiz1 = (-b + raizDelta) / (2 * a);
    var raiz2 = (-b - raizDelta) / (2 * a);

    console.log("As raízes da equação são: " + raiz1 + " e " + raiz2);
}

//10 – Escreva um algoritmo que dê uma distância e uma velocidade (distância em km e a velocidade em km/h), mostre no console o tempo aproximado em minutos que percorre para percorrer a distância estabelecida. Exemplo : Distância : 150 (km), Velocidade : 65 (km/h), Resultado : 138 minutos


var distancia = 150; // Distância em km
var velocidade = 65; // Velocidade em km/h

var tempo = (distancia / velocidade) * 60; // Tempo em minutos

console.log("O tempo aproximado para percorrer a distância é: " + Math.round(tempo) + " minutos");
