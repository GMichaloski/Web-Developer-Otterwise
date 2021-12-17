let funcionarios = [
    { name: 'Marília', age: 26, job: 'Dev' },
    { name: 'Juca', age: 21, job: 'RH' },
    { name: 'Flávia', age: 30, job: 'Financeiro' },
    { name: 'Sérgio', age: 24, job: 'Dev' },
    ],
    frase = "";

for ( let i = 0; i < funcionarios.length; i++){
    if (funcionarios[i].job === "Dev"){
        frase += `${funcionarios[i].name} é dev. `;
    }
    else {
        frase += `${funcionarios[i].name} não é dev. `;
    }
}

console.log(frase);