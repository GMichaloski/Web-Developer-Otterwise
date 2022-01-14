const arrayGenerico = {nome: 'Analu dos santos baptista', cpf: '14776213931', telefone: '8328008258'};

let arrumarNome = (obj) =>{
   obj.nome = obj.nome.charAt(0).toUpperCase() + element.nome.slice(1);
    return obj;
}

let arrumarCPF = (obj) =>{
    obj.forEach(element =>{
        console.log(element);
    });
}
console.log(arrumarNome(arrayGenerico));