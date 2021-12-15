/*

1. Crie variáveis para armazenar algumas informações de cadastro de um estudante, são elas: nome, sobrenome, dia do nascimento, mês do nascimento, ano do nascimento, primeira nota e segunda nota. A partir dessas informações, você deve mostrar um relatório na tela da seguinte forma: Nome Completo, Idade, Data de Nascimento e Média:

Exemplo de Saída:
Nome Completo: João Pedro Bretanha
Idade: 29
Data de Nascimento: 11/04/1992
Média: 8

*/

let nome = "João", sobrenome = "da Silva", dia_do_nascimento = 1, mes_do_nascimento = 2, ano_do_nascimento = 2003,
    primeira_nota = 10, segunda_nota = 5;
console.log("Nome: " + nome +" " + sobrenome);
console.log("Idade: " + (2021 - ano_do_nascimento));
console.log("Data de nascimento: " + dia_do_nascimento + "/" + mes_do_nascimento + "/" + ano_do_nascimento);
console.log((primeira_nota + segunda_nota)/2);
