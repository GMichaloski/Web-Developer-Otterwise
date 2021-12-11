/*

1. Faça uma função que recebe um valor inteiro e verifica se o valor é par. A função deve retornar um valor booleano se for par. 
2. Faça uma função que recebe a idade de um nadador e retorna a categoria desse nadador de acordo com a tabela abaixo: 
Idade - Categoria
5 a 7 anos - Infantil A
8 a 10 anos - Infantil B
11 - 13 anos - Juvenil A
14 - 17 anos - Juvenil B
Maiores de 18 anos (inclusive) - Adulto

*/

function verificadorParidade(numero){
    if ((numero%2) === 0){
        return true;
    }
    return false;
}

function idadeNadador(idade){
    if(idade < 5){
        return "Inválido!";
    }
    else if(idade >= 5 && idade <=7){
        return "Infatil A";
    }
    else if(idade >= 8 && idade <=10){
        return "Infatil B";
    }
    else if(idade >= 11 && idade <=13){
        return "Juvenil A";
    }
    else if(idade >= 14 && idade <=17){
        return "Juvenil B";
    }
    return "Adulto";
}