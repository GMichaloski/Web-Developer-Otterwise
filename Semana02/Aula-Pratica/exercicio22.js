let array = [
    { nome: "João", idade: 30, salario: 15000, senioridade: "senior" },
    { nome: "Pedro", idade: 22, salario: 10000, senioridade: "pleno" },
    { nome: "Carla", idade: 27, salario: 1500, senioridade: "estagio" },
    { nome: "Lucas", idade: 35, salario: 15000, senioridade: "senior" },
    { nome: "Roberta", idade: 45, salario: 5000, senioridade: "junior" },
    { nome: "Patrícia", idade: 19, salario: 10000, senioridade: "pleno" },
    { nome: "Joana", idade: 23, salario: 5000, senioridade: "junior" },
    ]

/*
● Ordena o Array em ordem crescente por idade;
● Ordena o Array em ordem decrescente por idade;
● Ordena o Array em ordem crescente por salário;
● Ordena o Array em ordem decrescente por salário;
● Ordena o Array em ordem crescente por senioridade;
● Ordena o Array em ordem decrescente por senioridade;
*/

function ordenadorIdadeCrescente(array){
    let temp = 0;
    for(let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length;j++){
            if (array[i].idade < array[j].idade){
                temp = array[i].idade;
                array[i].idade = array[j].idade;
                array[j].idade = temp;
            }
        }
    }
    return array;
}

function ordenadorIdadeDecrescente(array){
    let temp = 0;
    for(let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length;j++){
            if (array[i].idade > array[j].idade){
                temp = array[i].idade;
                array[i].idade = array[j].idade;
                array[j].idade = temp;
            }
        }
    }
    return array;
}

function ordenadorSalarioCrescente(array){
    let temp = 0;
    for(let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length;j++){
            if (array[i].salario < array[j].salario){
                temp = array[i].salario;
                array[i].salario = array[j].salario;
                array[j].salario = temp;
            }
        }
    }
    return array;
}

function ordenadorSalarioDecrescente(array){
    let temp = 0;
    for(let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length;j++){
            if (array[i].salario > array[j].salario){
                temp = array[i].salario;
                array[i].salario = array[j].salario;
                array[j].salario = temp;
            }
        }
    }
    return array;
}

function ordenadorSenioridadeCrescente(array){
    let temp = 0;
    for (let k = 0; k < array.length;k++){
        switch (array[k].senioridade){
            case "estagio":
                array[k].senioridade = 1;
                break;
            case "junior":
                array[k].senioridade = 2;
                break;
            case "pleno":
                array[k].senioridade = 3;
                break;
            case "senior":
                array[k].senioridade = 4;
                break
        }
    }
    for(let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length;j++){
            if (array[i].senioridade < array[j].senioridade){
                temp = array[i].senioridade;
                array[i].senioridade = array[j].senioridade;
                array[j].senioridade = temp;
            }
        }
    }

    for (let k = 0; k < array.length;k++){
        switch (array[k].senioridade){
            case 1:
                array[k].senioridade = "estagio";
                break;
            case 2:
                array[k].senioridade = "junior";
                break;
            case 3:
                array[k].senioridade = "pleno";
                break;
            case 4:
                array[k].senioridade = "senior";
                break;
        }
    }
    return array;
}

function ordenadorSenioridadeDecrescente(array){
    let temp = 0;
    for (let k = 0; k < array.length;k++){
        switch (array[k].senioridade){
            case "estagio":
                array[k].senioridade = 1;
                break;
            case "junior":
                array[k].senioridade = 2;
                break;
            case "pleno":
                array[k].senioridade = 3;
                break;
            case "senior":
                array[k].senioridade = 4;
                break
        }
    }
    for(let i = 0; i < array.length; i++){
        for (let j = 0; j < array.length;j++){
            if (array[i].senioridade > array[j].senioridade){
                temp = array[i].senioridade;
                array[i].senioridade = array[j].senioridade;
                array[j].senioridade = temp;
            }
        }
    }

    for (let k = 0; k < array.length;k++){
        switch (array[k].senioridade){
            case 1:
                array[k].senioridade = "estagio";
                break;
            case 2:
                array[k].senioridade = "junior";
                break;
            case 3:
                array[k].senioridade = "pleno";
                break;
            case 4:
                array[k].senioridade = "senior";
                break;
        }
    }
    return array;
}


console.log(ordenadorIdadeCrescente(array));
console.log(ordenadorIdadeDecrescente(array));
console.log(ordenadorSalarioCrescente(array));
console.log(ordenadorSalarioDecrescente(array));
console.log(ordenadorSenioridadeDecrescente(array));
console.log(ordenadorSenioridadeCrescente(array));