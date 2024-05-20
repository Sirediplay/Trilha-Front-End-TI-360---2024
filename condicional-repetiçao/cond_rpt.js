//1 - Faça um algoritmo em Javascript para calcular a média aritmética das 3 notas de um aluno e mostre, além do valor da média, uma mensagem de "Aprovado", caso a média seja igual ou superior a 6, ou a mensagem "Reprovado" , caso contrário. Exiba os resultados no console.


const nota1 = parseFloat(prompt("Digite a primeira nota:"));
const nota2 = parseFloat(prompt("Digite a segunda nota:"));
const nota3 = parseFloat(prompt("Digite a terceira nota:"));

const media = (nota1 + nota2 + nota3) / 3;
// Exibição da média
console.log(`Média: ${media.toFixed(2)}`);

if (media >= 6) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

//2 - Elaborar um algoritmo em Javascript que dê 3 valores A, B, C, exiba no console o maior dos 3 valores e com a mensagem: "É o maior".

const A = parseFloat(prompt("Digite o valor de A:"));
const B = parseFloat(prompt("Digite o valor de B:"));
const C = parseFloat(prompt("Digite o valor de C:"));

// Verificação e exibição do maior valor
if (A >= B && A >= C) {
  console.log(`O maior valor é A: ${A}`);
} else if (B >= A && B >= C) {
  console.log(`O maior valor é B: ${B}`);
} else {
  console.log(`O maior valor é C: ${C}`);
}

//3 - Elaborar um algoritmo em Javascript que dê 2 valores A e B e os exibam no console com a mensagem: "São múltiplos" ou "Não são múltiplos".

 const a =  parseFloat(prompt("Digite o valor de A:"));
const b =  parseFloat(prompt("Digite o valor de B:"));

// Verificação e exibição da relação entre os valores
if (a % b === 0 || b % a === 0) {
  console.log("São múltiplos");
} else {
  console.log("Não são múltiplos");
}

//4 – Escreva um algoritmo que leia um número e mostre uma mensagem indicando se este número é par ou ímpar e se é positivo ou negativo.


const numero = parseFloat(prompt("Digite um número:"));

// Verificação se é par ou ímpar
if (numero % 2 === 0) {
  console.log(`O número ${numero} é par.`);
} else {
  console.log(`O número ${numero} é ímpar.`);
}

// Verificação se é positivo ou negativo
if (numero > 0) {
  console.log(`O número ${numero} é positivo.`);
} else if (numero < 0) {
  console.log(`O número ${numero} é negativo.`);
} else {
  console.log(`O número ${numero} é zero.`);
}

//5 - Elaborar um algoritmo em Javascript que dê dois valores e exiba no console uma das três mensagens a seguir: 'Números iguais', caso os números sejam iguais 'Primeiro é maior', caso o primeiro seja maior que o segundo 'Segundo maior' , caso o segundo seja maior que o primeiro.

let valor1 = prompt('Digite o primeiro valor')

let valor2 = prompt('Digite o segundo valor')

if( valor1 === valor2){
    console.log('Numeros igais')
}else if( valor1 > valor2){
    console.log('Primeiro é Maior')
}else{
    console.log('Segundo é Maior')
}

//6 - Elaborar um algoritmo em Javascript para calcular o IMC ideal de uma pessoa. Tendo como dados de entrada a altura e o sexo utilizando as seguintes fórmulas:
//para homens: (72,7*h)-58
//para mulheres: (62.1*h)-44.7 Exiba o resultado no console
//Exemplo : Entradas: Homem – 1,62 Resultado: 65,59


var altura = prompt('digite a altuta em metros')
var sexo = prompt('digite o sexo M para masculino e F para feminino')
var imc
if (sexo === 'M'){

    imc = (72.7 * altura) -58
}else if(sexo === 'F'){

    imc = (61.1 * altura) 
}else{
    console.log('Sexo invalido Digite  M Para masculino ou F Para feminino')
}
if(imc){
    console.log('IMC ideal: ' + imc.toFixed(2))
}

//7 - Escreva um algoritmo em Javascript para exibir no console os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente.

// Exibição dos números de 10 a 1 em ordem decrescente
for (let i = 10; i >= 1; i--) {
    console.log(i);
  }

  //8 - Escreva um algoritmo em Javascript para exibir no console os números múltiplos de 5 do intervalo de 1 a 50.

for (let i = 1; i <= 50; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }

  //9 - Elabore um algoritmo que com 5 valores mostre no console o maior elemento entre os 5 e o número de vezes que esse elemento apareceu entre os valores.

  // Ler os cinco valores
const valores = []
for (let i = 0; i < 5; i++) {
  valores.push(parseFloat(prompt(`Digite o ${i + 1}º valor:`)))
}
// Encontrar o maior elemento
let maior = valores[0];
for (let i = 1; i < 5; i++) {
  if (valores[i] > maior) {
    maior = valores[i];
  }
}
// Contar quantas vezes o maior elemento apareceu
let contador = 0;
for (let i = 0; i < 5; i++) {
  if (valores[i] === maior) {
    contador++;
  }
}

console.log(`O maior elemento é ${maior} e apareceu ${contador} vezes.`)

//10 - Escreva um algoritmo em Javascript que dê um número inteiro N exiba no console todos os valores pares entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO.

const N = parseInt(prompt("Digite um número inteiro maior que zero:"))

// Exibir os valores pares de 1 a N
for (let e = 2; e <= N; e += 2) {
  console.log(e)
}

 //11 – Escreva um algoritmo em Javascript que calcula e exiba no console a tabuada do 7 (1 a 10). Nenhum console deve ser impresso: 7 X 1 = 7 7 X 2 = 14 
 
 // Exibição da tabuada do 7
console.log("Tabuada do 7:")

for (let t = 1; t <= 10; t++) 
    {
  const resultado = 7 * t;
  console.log(`7 X ${t} = ${resultado}`)
}

//12 – Faça um algoritmo que receba um número entre 1 a 7 mostrado no console o correspondente dia da semana. Exemplo: 1 – Domingo, 2 – Segunda

// Ler o número de 1 a 7
const nuMero = parseInt(prompt("Digite um número de 1 a 7:"))

// Verificar e exibir o dia da semana
switch (nuMero) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  case 4:
    console.log("Quarta-feira");
    break;
  case 5:
    console.log("Quinta-feira");
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Valor digitado errado");
}
//13 – Faça um programa que dê um valor v, calcule a soma de todos os números pares e o produto de todos os números ímpares até chegar no valor v

const v = parseInt(prompt("Digite um valor inteiro maior que zero:"));

// Inicializar variáveis para soma de pares e produto de ímpares
let somaPares = 0;
let produtoImpares = 1;

// Calcular soma de pares e produto de ímpares
for (let i = 1; i <= v; i++) {
  if (i % 2 === 0) {
    somaPares += i;
  } else {
    produtoImpares *= i;
  }
}
console.log(`Soma dos números pares até ${v}: ${somaPares}`)
console.log(`Produto dos números ímpares até ${v}: ${produtoImpares}`)


//14 – Faça um programa que dê 5 valores imprima o maior e o menor entre eles.

// Ler cinco valores
const valoress = []
for (let j = 0; j < 5; j++) {
  valoress.push(parseFloat(prompt(`Digite o ${j + 1}º valor:`)))
}

// Encontrar o maior e o menor valor
const maiorr = Math.max(...valoress)
const menorr = Math.min(...valoress)


console.log(`O maior valor é ${maiorr}.`)
console.log(`O menor valor é ${menorr}.`)

//15 - Escreva um algoritmo em Javascript que exiba no console os 15 primeiros números da série Fibonacci: 1, 1, 2, 3, 5, 8, 13

// Exibição dos primeiros 15 números da sequência de Fibonacci
function fibonacci(n) {
    const fib = [1, 1]
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
  }
  
  const n = 15;
  const fibonacciNumbers = fibonacci(n)
  console.log(fibonacciNumbers.join(", "))
  

