    //VETORES E FUNÇOES

    //1 - Crie um algoritmo em Javascript que gere um vetor de 8 posições onde os valores de cada posição sejam o cubo de cada índice

    var vetor = []; // Inicializa o vetor

for (var i = 0; i < 8; i++) {
    vetor[i] = Math.pow(i, 3); // Atribui o cubo do índice à posição correspondente no vetor
}

console.log(vetor);

//----/-//-/-/-/-/-//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-//-/-/-/-/-/-

//2 - Dado um vetor 
//Posição no Vetor:	1	2	3	4	5	6	7	8
//Valor de V:	5	1	4	2	7	8	3	6
//Crie um algoritmo em Javascript que gere um vetor V2 a partir do dobro de cada valor de V. Gere os resultados no console

var V = [5, 1, 4, 2, 7, 8, 3, 6]; // Vetor V
var V2 = []; // Vetor V2

for (var i = 0; i < V.length; i++) {
    V2[i] = V[i] * 2; // Atribui o dobro do valor de V à posição correspondente em V2
}

console.log(V2); 


//3 - Ler um vetor A de 5 números. Após, ler mais um número e salvar em uma variável X. Armazenar em um vetor M o resultado de cada elemento de A multiplicado pelo valor X. Logo após, imprimir o vetor M Gere os resultados no console


let A = [1,2,3,4,5] //vetor
let X = 2 //valor
let M = []//vetor M
for (let i = 0; i < A.length; i++) {
    M[i] = A[i] * X //atribui o valor de A multiplicado por X ao vetor M
}
console.log(M) 

//-///-//=/=/=//-=/-=/-/=/-=/-/=/-/=/-=/-/=/-=//=/=/=/=//=/=/=/=/=/=/=/=/==/=/=//=/=/=/=


//4 - Escreva um algoritmo que permita a leitura dos nomes de 5 pessoas e armazene os nomes lidos em um vetor. Após isto, o algoritmo deve permitir a leitura de um nome de qualquer pessoa e depois escrever a mensagem ACHEI, se o nome estiver entre os 5 nomes lidos anteriormente (guardados no vetor) ou NÃO ACHEI caso contrário. Gere os resultados no console.


let nomes = ["Ana", "Ediplay", "Carlos", "Thais", "Eduardo"]; // Vetor com os nomes das 5 pessoas

let nomeProcurado = prompt("digite um nome"); // Nome a ser procurado

let achei = false; // Variável para verificar se o nome foi encontrado

for (let i = 0; i < nomes.length; i++) {
    if (nomes[i] === nomeProcurado) {
        achei = true;
        break;
    }
}

if (achei) {
    console.log("ACHEI");
} else {
    console.log("NÃO ACHEI");
}
//-/-/-/-/=/-=/-=/-=-/=/-=/-/=/-=/-/=/-=/-/=/-/=-/=/-/=-/=/-/=/-=/-/=/-=/-/=/-/=-/=/-/=/-/=-/=/-/=/-/=-/=/-/=-/

//5 - Crie um algoritmo que leia um vetor Q de 10 posições (aceitar somente números pares). O algoritmo deverá escrever o valor do maior elemento de Q e a respectiva posição que ele ocupa no vetor. Gere os resultados no console.
let Q = [2, 4, 6, 8, 10, 12, 14, 16, 18,]
let maior = Q [0]; // Variável para armazenar o maior número
let posicaoMaior = 0
for (let i = 0; i < Q.length; i++) {

    if ( Q [i] > maior){
        maior = Q [i]
        posicaoMaior = i
    }
}
console.log(`O maior número é ${maior} e está na posição ${maior}`)

console.log("A posição do maior elemento no vetor é: " + posicaoMaior)



//6 - Faça um algoritmo para ler e armazenar em um vetor à temperatura média de todos os dias de uma semana. Calcular e escrever no console: a) Temperatura menor da semana b) Temperatura maior da semana c) Temperatura média semanal d) O número de dias da semana em que a temperatura foi inferior a média semanal

var temperaturas = [22, 24, 21, 23, 25, 22, 24];  

var menorTemperatura = Math.min(...temperaturas); // Temperatura menor da semana
var maiorTemperatura = Math.max(...temperaturas); // Temperatura maior da semana

var somaTemperaturas = 0;
for (var i = 0; i < temperaturas.length; i++) {
    somaTemperaturas += temperaturas[i];
}
var mediaSemanal = somaTemperaturas / temperaturas.length; // Temperatura média semanal

var diasInferiorMedia = 0;
for (var i = 0; i < temperaturas.length; i++) {
    if (temperaturas[i] < mediaSemanal) {
        diasInferiorMedia++;
    }
}

console.log("A temperatura menor da semana é: " + menorTemperatura);
console.log("A temperatura maior da semana é: " + maiorTemperatura);
console.log("A temperatura média semanal é: " + mediaSemanal);
console.log("O número de dias da semana em que a temperatura foi inferior à média semanal é: " + diasInferiorMedia);




//7 - Faça um algoritmo para ler 5 números e armazenar em um vetor. Após isso, o algoritmo deve ordenar os números no vetor em ordem crescente. Escrever o vetor ordenado. Gere os resultados no console.

var numeros = [5, 1, 4, 2, 3]; 

numeros.sort(function(a, b) {
    return a - b;
});

console.log(numeros); 

//8 - Fazer uma função que pergunta um valor em metros e imprima o correspondente em decímetros, centímetros e milímetros.

function converterMetros(metros) {
    var decimetros = metros * 10;
    var centimetros = metros * 100;
    var milimetros = metros * 1000;

    console.log(metros + " metros é igual a:");
    console.log(decimetros + " decímetros");
    console.log(centimetros + " centímetros");
    console.log(milimetros + " milímetros");
}


converterMetros((prompt("digite em metros"))); 


//9 - Faça um programa, com uma função que necessita de três argumentos, e que forneça a soma desses três argumentos através de uma função. Seu script também deve fornecer a média dos três números, através de uma segunda função que chama a primeira.

// Função que retorna a soma de três números
function soma(a, b, c) {
    return a + b + c;
}

// Função que retorna a média de três números
function media(a, b, c) {
    var total = soma(a, b, c);
    return total / 3;
}

// Exemplo de uso:
var num1 = 5, num2 = 10, num3 = 15;
console.log("A soma é: " + soma(num1, num2, num3));
console.log("A média é: " + media(num1, num2, num3));

//Neste código, a função soma aceita três argumentos e retorna a soma desses argumentos A função media também aceita três argumentos, chama a função soma para obter a soma dos argumentos e, em seguida, divide o resultado por 3 para obter a média Finalmente, o código usa essas funções para calcular e imprimir a soma e a média de três números
//-//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-


//10 - Faça uma função que exige um valor em graus Fahrenheit e imprime o correspondente em graus Celsius.

Fórmula:// C = (f-32) (5/9)*


function converterFahrenheitParaCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * (5/9);
    console.log(fahrenheit + " graus Fahrenheit é igual a " + celsius + " graus Celsius.");
}

converterFahrenheitParaCelsius(68);

//11 - Faça um programa, com uma função que precisa de um argumento. A função retorna o valor do caractere 'P', se seu argumento for positivo, e 'N', se seu argumento for zero ou negativo


function verificarPositivoOuNegativo(numero) {
    if (numero > 0) {
        return 'P';
    } else {
        return 'N';
    }
}

console.log(verificarPositivoOuNegativo(5));  // Retorna 'P'
console.log(verificarPositivoOuNegativo(-3)); // Retorna 'N'
console.log(verificarPositivoOuNegativo(0));  // Retorna 'N'



//12 – Faça uma função que receba um vetor contendo N valores e retorne por referência o maior elemento do vetor e o número de vezes que esse elemento apareceu no vetor

function encontrarMaiorElemento(vetor) {
    var maiorElemento = Math.max(...vetor);
    var contagem = 0;

    for (var i = 0; i < vetor.length; i++) {
        if (vetor[i] === maiorElemento) {
            contagem++;
        }
    }

    return {
        maiorElemento: maiorElemento,
        contagem: contagem
    };
}


var vetor = [1, 2, 3, 2, 1, 2, 3, 3, 3];
var resultado = encontrarMaiorElemento(vetor);
console.log("O maior elemento é: " + resultado.maiorElemento);
console.log("O maior elemento aparece " + resultado.contagem + " vezes no vetor.");

//Neste código a função encontrarMaiorElemento aceita um vetor como argumento Ela então encontra o maior elemento no vetor usando a função Math.max() Em seguida ela percorre o vetor e conta quantas vezes o maior elemento aparece no vetor Finalmente ela retorna um objeto que contém o maior elemento e a contagem. Você pode chamar essa função com o vetor que deseja verificar O código de exemplo mostra como você pode usar essa função e imprimir os resultados no console. Você pode alterar os valores de vetor para os valores desejados
///-/-/-/-//-/-/-/-/-//-/-/-/-/-/-/-/-/-//-/-/-/-/-/--/-/-/-/-/-/-/-/-/-/-/-/-/-/


//13 – Faça uma função que informe a quantidade de dígitos de um determinado número inteiro informado

function contarDigitos(numero) {
    var quantidadeDigitos = numero.toString().length;
    return quantidadeDigitos;
}


var numero = 12345;
console.log("O número " + numero + " tem " + contarDigitos(numero) + " dígitos.");




//14 – Faça uma função que calcula um fatorial de um número

function calcularFatorial(n) {
    var fatorial = 1;
    for (var i = 1; i <= n; i++) {
        fatorial *= i;
    }
    return fatorial;
}

// Exemplo de uso:
var numero = 5;
console.log("O fatorial de " + numero + " é " + calcularFatorial(numero) + ".");




//15 - Faça uma função que recebe uma lista de produtos e seus preços e acrescenta 10% de valor para os produtos com preço menor que 150 Exibindo a lista final no console por ordem de preço (contendo nome do produto – valor reajustado) Exemplo
//Fruta – 150 Bebida - 200

function reajustarPrecos(produtos) {
    // Acrescenta 10% de valor para os produtos com preço menor que 150
    for (var i = 0; i < produtos.length; i++) {
        if (produtos[i].preco < 150) {
            produtos[i].preco *= 1.10;
        }
    }

    // Ordena a lista de produtos por preço
    produtos.sort(function(a, b) {
        return a.preco - b.preco;
    });

    // Exibe a lista final no console
    for (var i = 0; i < produtos.length; i++) {
        console.log(produtos[i].nome + " - " + produtos[i].preco.toFixed(2));
    }
}

// Exemplo de uso:
var produtos = [
    { nome: "Fruta", preco: 150 },
    { nome: "Bebida", preco: 200 },
    { nome: "Pão", preco: 100 }
];
reajustarPrecos(produtos);
