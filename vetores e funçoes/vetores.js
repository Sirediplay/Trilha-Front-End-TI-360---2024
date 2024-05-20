    //VETORES E FUNÇOES

    //1 - Crie um algoritmo em Javascript que gere um vetor de 8 posições, onde os valores de cada posição sejam o cubo de cada índice.

    var vetor = []; // Inicializa o vetor

for (var i = 0; i < 8; i++) {
    vetor[i] = Math.pow(i, 3); // Atribui o cubo do índice à posição correspondente no vetor
}

console.log(vetor);

//----/-//-/-/-/-/-//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-//-/-/-/-/-/-

//2 - Dado um vetor 
//Posição no Vetor:	1	2	3	4	5	6	7	8
//Valor de V:	5	1	4	2	7	8	3	6
//Crie um algoritmo em Javascript que gere um vetor V2 a partir do dobro de cada valor de V. Gere os resultados no console.

var V = [5, 1, 4, 2, 7, 8, 3, 6]; // Vetor V
var V2 = []; // Vetor V2

for (var i = 0; i < V.length; i++) {
    V2[i] = V[i] * 2; // Atribui o dobro do valor de V à posição correspondente em V2
}

console.log(V2); 


//3 - Ler um vetor A de 5 números. Após, ler mais um número e salvar em uma variável X. Armazenar em um vetor M o resultado de cada elemento de A multiplicado pelo valor X. Logo após, imprimir o vetor M. Gere os resultados no console.


let A = [1,2,3,4,5] //vetor
let X = 2 //valor
let M = []//vetor M
for (let i = 0; i < A.length; i++) {
    M[i] = A[i] * X //atribui o valor de A multiplicado por X ao vetor M
}
console.log(M) 

//-///-//=/=/=//-=/-=/-/=/-=/-/=/-/=/-=/-/=/-=//=/=/=/=//=/=/=/=/=/=/=/=/==/=/=//=/=/=/=


//4 - Escreva um algoritmo que permita a leitura dos nomes de 5 pessoas e armazene os nomes lidos em um vetor. Após isto, o algoritmo deve permitir a leitura de um nome de qualquer pessoa e depois escrever a mensagem ACHEI, se o nome estiver entre os 5 nomes lidos anteriormente (guardados no vetor), ou NÃO ACHEI caso contrário. Gere os resultados no console.


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



