// 1. Crie uma função que recebe uma string (com quatro possibilidades:
//      “soma”, “subtrai”, “divide”, “multiplica”) e dois números.
//       A função deve retornar a operação realizada informada pela string nos dois números.

// Exemplo Entrada:
// myFunction(‘soma’)(3)(5)

// Exemplo Saída:
// 8

const calculate = (operation) =>{
    const operations = {
        soma: (a,b) => a+b,
        subtrai: (a,b) => a-b,
        multiplica: (a,b) => a*b,
        divide: (a,b) => a/b,
    }
    return (numberOne) => (numberTwo) => operations[operation](numberOne,numberTwo);
}

console.log(calculate('soma')(1)(2));