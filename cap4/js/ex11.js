// 🔢 1. Contar de 1 a 10
for (let i = 1; i <= 10; i++) {
  console.log(i); // Mostra os números de 1 até 10
}

// 🔢 2. Contar de 10 a 1 (de trás pra frente)
for (let i = 10; i >= 1; i--) {
  console.log(i); // Mostra os números de 10 até 1
}

// 🔢 3. Contar de 0 a 20 pulando de 2 em 2
for (let i = 0; i <= 20; i += 2) {
  console.log(i); // Mostra: 0, 2, 4, ... até 20
}

// 🔢 4. Percorrer um array de nomes e mostrar cada um
const nomes = ["Ana", "Carlos", "Maria", "João"];

for (let i = 0; i < nomes.length; i++) {
  console.log(`Nome ${i + 1}: ${nomes[i]}`); 
  // i + 1 exibe a posição bonitinha (1,2,3...)
  // nomes[i] pega o valor do array
}

// 🔢 5. Somar todos os números de um array
const numeros = [5, 10, 15, 20];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i]; // Vai somando cada valor do array
}

console.log(`A soma é: ${soma}`);

// 🔢 6. Mostrar apenas os números maiores que 10 no array
const lista = [4, 11, 7, 15, 9, 20];

for (let i = 0; i < lista.length; i++) {
  if (lista[i] > 10) {
    console.log(lista[i]); // Mostra só quem é maior que 10
  }
}

// 🔢 7. Contar quantos números são pares em um array
const valores = [2, 5, 8, 9, 12, 15, 20];
let pares = 0;

for (let i = 0; i < valores.length; i++) {
  if (valores[i] % 2 === 0) {
    pares++; // Soma +1 toda vez que acha um número par
  }
}

console.log(`Quantidade de números pares: ${pares}`);

// 🔢 8. Criar uma tabuada do 5
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// 🔢 9. Mostrar todas as letras de uma palavra
const palavra = "Programar";

for (let i = 0; i < palavra.length; i++) {
  console.log(palavra[i]); // Mostra cada letra separada
}

// 🔢 10. Mostrar os índices e os valores de um array de frutas
const frutas = ["Maçã", "Banana", "Uva", "Pera"];

for (let i = 0; i < frutas.length; i++) {
  console.log(`Índice ${i} → Fruta: ${frutas[i]}`);
}