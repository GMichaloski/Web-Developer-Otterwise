if(""){
    console.log("Isso não será impresso, visto que a string vazia retorna false");
}
if("qualquer coisa"){
    console.log("Isso será impresso, pq a string não é vazia!");
}
if(0){
    console.log("Isso não será impresso, pq 0 é falso em binário");
}
if(undefined){
    console.log("Isso não será impresso, pq undefined é falso");
}
const array = []
if(!array.length){
    console.log("Prático pra verificar se um array está vazio!");
}