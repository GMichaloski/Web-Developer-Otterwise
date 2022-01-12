const minhaString = "guga";
const nome = "g" + "u" + "g" + "a";

// Métodos de string

// slice -> método de array

// Faz oq o nome supôe: corta a string nos pontos A e B
const str = "maçã, banana, laranja";
const part = str.slice(6,12);

console.log(part)

// substring  -> método de string (boa prática semântica)

// Mesma coisa que o slice, só que os parâmetros não são opcionais
const part2 = str.substring(6,12);
console.log(part2);

// substr -> Deprecated, mas é bom conhecer

// Ele pede o ponto inicial e o tamanho do corte
const part3 = str.substr(6,6);

// Replace 

//Pega a primeira palavra e faz a troca
let text = "Olá alunos Otterwise oTTerwise!"
let newText = text.replace(/otterwise/gi, "do curso webdev")
// g = todas as ocorrências do padrão
// i = case sensitive
console.log(newText)

// ReplaceAll

//Troca todas as palavras dadas
let text2 = "Olá alunos Otterwise Otterwise Otterwise!"
let newText2 = text2.replaceAll("Otterwise", "do curso webdeveloper")
console.log(newText2);

//toUpperCase e toLowerCase

console.log("vasco".toUpperCase());
console.log("VASCO DA GAMA".toLowerCase());

// trim

//Remove espaços desnecessários

console.log("                                        Boa noite".trim());

// padStart e padEnd
console.log("10".padStart(4, "0"));
console.log("10".padEnd(4, "0"));

// split

const arrayFruits = str.split(",");
console.log(arrayFruits);