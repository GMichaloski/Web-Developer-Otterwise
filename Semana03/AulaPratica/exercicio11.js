const arrayGenerico = [
    { nome: "João", idade: 30, salario: 15000, senioridade: "senior" },
    { nome: "Pedro", idade: 22, salario: 10000, senioridade: "pleno" },
    { nome: "Carla", idade: 27, salario: 1500, senioridade: "estagio" },
    { nome: "Lucas", idade: 35, salario: 15000, senioridade: "senior" },
    { nome: "Roberta", idade: 45, salario: 5000, senioridade: "junior" },
    { nome: "Patrícia", idade: 19, salario: 10000, senioridade: "pleno" },
    { nome: "Joana", idade: 23, salario: 5000, senioridade: "junior" },
    ];
    
let ordemCrescenteIdade = (array) => {
    let temp, arrayNovo = array;
    for (let i = 0; i < arrayNovo.length; i++){
        for (let j = 0; j < arrayNovo.length; j++){
            if (arrayNovo[j].idade > arrayNovo[i].idade){
                temp = arrayNovo[i].idade;
                arrayNovo[i].idade = arrayNovo[j].idade;
                arrayNovo[j].idade = temp;
            }
        }
    }
    return arrayNovo ;
}

console.log(ordemCrescenteIdade(arrayGenerico));

let ordemDecrescenteIdade = (array) => {
    let temp, arrayNovo = array;
    for (let i = 0; i < arrayNovo.length; i++){
        for (let j = 0; j < arrayNovo.length; j++){
            if (arrayNovo[j].idade < arrayNovo[i].idade){
                temp = arrayNovo[i].idade;
                arrayNovo[i].idade = arrayNovo[j].idade;
                arrayNovo[j].idade = temp;
            }
        }
    }
    return arrayNovo ;
}

console.log(ordemDecrescenteIdade(arrayGenerico));

let ordemCrescenteSalario = (array) => {
    let temp, arrayNovo = array;
    for (let i = 0; i < arrayNovo.length; i++){
        for (let j = 0; j < arrayNovo.length; j++){
            if (arrayNovo[j].salario > arrayNovo[i].salario){
                temp = arrayNovo[i].salario;
                arrayNovo[i].salario = arrayNovo[j].salario;
                arrayNovo[j].salario = temp;
            }
        }
    }
    return arrayNovo ;
}

console.log(ordemCrescenteSalario(arrayGenerico));

let ordemDecrescenteSalario = (array) => {
    let temp, arrayNovo = array;
    for (let i = 0; i < arrayNovo.length; i++){
        for (let j = 0; j < arrayNovo.length; j++){
            if (arrayNovo[j].salario < arrayNovo[i].salario){
                temp = arrayNovo[i].salario;
                arrayNovo[i].salario = arrayNovo[j].salario;
                arrayNovo[j].salario = temp;
            }
        }
    }
    return arrayNovo ;
}

console.log(ordemDecrescenteSalario(arrayGenerico));

let ordemCrescenteSenioridade = (array) => {
    let temp, arrayNovo = array;
    for (let i = 0; i < arrayNovo.length; i++){
        switch (arrayNovo[i].senioridade){
            case "estagio":
                arrayNovo[i].senioridade = 1;
                break;
            case "junior":
                arrayNovo[i].senioridade = 2;
                break;
            case "pleno":
                arrayNovo[i].senioridade = 3;
                break;
            case "senior":
                arrayNovo[i].senioridade = 4;
                break;
        }
    }
    for (let i = 0; i < arrayNovo.length; i++){
        for (let j = 0; j < arrayNovo.length; j++){
            if (arrayNovo[j].senioridade > arrayNovo[i].senioridade){
                temp = arrayNovo[i].senioridade;
                arrayNovo[i].senioridade = arrayNovo[j].senioridade;
                arrayNovo[j].senioridade = temp;
            }
        }
    }
    for (let i = 0; i < arrayNovo.length; i++){
        switch (arrayNovo[i].senioridade){
            case 1:
                arrayNovo[i].senioridade = "estagio";
                break;
            case 2:
                arrayNovo[i].senioridade = "junior";
                break;
            case 3:
                arrayNovo[i].senioridade = "pleno";
                break;
            case 4:
                arrayNovo[i].senioridade = "senior";
                break;
        }
    }
    return arrayNovo ;
}
console.log(ordemCrescenteSenioridade(arrayGenerico));

let ordemDecrescenteSenioridade = (array) => {
    let temp, arrayNovo = array;
    for (let i = 0; i < arrayNovo.length; i++){
        switch (arrayNovo[i].senioridade){
            case "estagio":
                arrayNovo[i].senioridade = 1;
                break;
            case "junior":
                arrayNovo[i].senioridade = 2;
                break;
            case "pleno":
                arrayNovo[i].senioridade = 3;
                break;
            case "senior":
                arrayNovo[i].senioridade = 4;
                break;
        }
    }
    for (let i = 0; i < arrayNovo.length; i++){
        for (let j = 0; j < arrayNovo.length; j++){
            if (arrayNovo[j].senioridade < arrayNovo[i].senioridade){
                temp = arrayNovo[i].senioridade;
                arrayNovo[i].senioridade = arrayNovo[j].senioridade;
                arrayNovo[j].senioridade = temp;
            }
        }
    }
    for (let i = 0; i < arrayNovo.length; i++){
        switch (arrayNovo[i].senioridade){
            case 1:
                arrayNovo[i].senioridade = "estagio";
                break;
            case 2:
                arrayNovo[i].senioridade = "junior";
                break;
            case 3:
                arrayNovo[i].senioridade = "pleno";
                break;
            case 4:
                arrayNovo[i].senioridade = "senior";
                break;
        }
    }
    return arrayNovo ;
}
console.log(ordemDecrescenteSenioridade(arrayGenerico));
