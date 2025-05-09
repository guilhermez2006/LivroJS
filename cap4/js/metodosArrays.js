// ANOTAÇÕES SOBRE MÉTODOS DE VETORES EM JAVASCRIPT

var cidades = ["Pelotas"]; // vetor inicial

cidades.push("São Lourenço"); // adiciona ao final → ["Pelotas", "São Lourenço"]

cidades.unshift("Porto Alegre"); // adiciona ao início → ["Porto Alegre", "Pelotas", "São Lourenço"]

var retirada = cidades.pop(); // remove o último → retirada = "São Lourenço", vetor vira ["Porto Alegre", "Pelotas"]

retirada = cidades.shift(); // remove o primeiro → retirada = "Porto Alegre", vetor vira ["Pelotas"]

cidades = ["Pelotas", "São Lourenço", "Porto Alegre"];

// .toString() → transforma em string separada por vírgulas
cidades.toString(); // "Pelotas,São Lourenço,Porto Alegre"

// .join(" - ") → junta os elementos com separador definido
cidades.join(" - "); // "Pelotas - São Lourenço - Porto Alegre"

for (var i = 0; i < cidades.length; i++) {
    alert(cidades[i]); // exibe cada cidade
}

alert(cidades.toString() + "\n\n" + cidades.join(" - "));
