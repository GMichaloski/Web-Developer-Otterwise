let person = {nome: 'Analu dos santos baptista', cpf: '14776213931', telefone: '8328008258'};

function getNome(pessoa){
    return pessoa.nome;
}

function getTelefone(pessoa){
    arrayTelefone = pessoa.telefone.split("");
    pessoa.telefone = `(${arrayTelefone[0]}${arrayTelefone[1]}) ${arrayTelefone[2]}${arrayTelefone[3]}${arrayTelefone[4]}${arrayTelefone[5]}-${arrayTelefone[6]}${arrayTelefone[7]}${arrayTelefone[8]}${arrayTelefone[9]}`;
    return pessoa.telefone
}

function getCPF(pessoa){
    arrayCPF = pessoa.cpf.split("")
    pessoa.cpf = `${arrayCPF[0]}${arrayCPF[1]}${arrayCPF[2]}.${arrayCPF[3]}${arrayCPF[4]}${arrayCPF[5]}.${arrayCPF[6]}${arrayCPF[7]}${arrayCPF[8]}-${arrayCPF[9]}${arrayCPF[10]}`
    return pessoa.cpf;
}

console.log(getNome(person));
console.log(getCPF(person));
console.log(getTelefone(person));