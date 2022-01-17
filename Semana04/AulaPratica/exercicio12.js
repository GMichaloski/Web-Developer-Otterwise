const objetoGenerico = {nome: '   analu dos santos baptista', cpf: '14776213931', telefone: '8328008258'};

let arrumarNome = (obj) =>{
    obj.nome = obj.nome.trim();
    nomes = []
    nomes = obj.nome.split(" ");
    nomes.forEach((element, index) => {
        nomes[index] = element[0].toUpperCase() + element.slice(1);
    });
    obj.nome = nomes.join(" ");
    return obj;
}

let arrumarCPF = (obj) =>{
    obj.cpf = `${obj.cpf.slice(0,3)}.${obj.cpf.slice(3,6)}.${obj.cpf.slice(6,9)}-${obj.cpf.slice(9,11)}`
    return obj;
}

let arrumarTelefone = (obj) =>{
    obj.telefone = `(${obj.telefone.slice(0,2)})${obj.telefone.slice(2,6)}-${obj.telefone.slice(6,10)}`
    return obj;
}

let arrumarTudo = (obj) => {
    arrumarNome(arrumarCPF(arrumarTelefone(objetoGenerico)))
    return obj;
}
console.log(arrumarTudo(objetoGenerico));