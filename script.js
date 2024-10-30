//var, let e const = variáveis
// variável serve para armazenar informações

let nome = "Carol";
// string é um tipo de dado textual
//console.log(nome);

// array [] colchetes
// array lista, é uma variável especial onde podemos armazenar uma lista de dados

let compras = [
    "celular", 
    "miojo",
]

// no array temos um índice, vai iniciar do número 0
//console.log(compras)

//console.log(compras[5])//perfumes   

let numeros = [ 1, 2, 3, 4, 5,]
console.log(numeros)

//metodos de array
//forma de manipular dados

//adicionando numero 6 no array:
numeros.push(6)
//push() adiciona/empurra no final do array

//adicionando o numero 0 no inicio:
numeros.unshift(0);
//adicionar ao inicio do array

numeros.pop();
//vai remover o ultimo item do array

console.log(numeros.join("-"))
//exibe todo array separado por -