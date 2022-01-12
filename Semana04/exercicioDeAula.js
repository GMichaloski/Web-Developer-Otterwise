// Exercício 1:

let str = "Maria, Paulo, Moisés, Joel, Ana"
str = str.split(",");
for (let i = 0; i < str.length; i++){
    console.log(str[i].trim());
}

// Exercício 2:

let txt = "Olá, mundo, meu, nome, é, Juca"
txt = txt.replaceAll(",", ".");
console.log(txt);

// Exercício 3:

let array = [{name: "joao"}, {name: "pedro"}]
array.push({name: "gustavo"})
console.log(array.reverse());

// Exercício 4: 

let nomes = ["joao", "pedro", "Gabriel", "Mari"], newNomes = []
nomes.forEach((element, index) => {
    newNomes[index] = {"id": index,
    "nome": element}
});

console.log(newNomes);

// Exercício 5:

const usuarios = 
[{id: 3, name: "joao", active: false},
     {id: 2, name: "gabriel", active: false},
      {id: 1, name: "mari", active: true},
       {id: 0, name: "miguel", active: false}]


let usuariosAtivos = [], inativos = 0;
usuarios.forEach((user) => {
    if(user.active === true){
        usuariosAtivos.push(user.name);
    }
    else{
        inativos++;
    }
})
console.log(usuariosAtivos);
console.log(inativos);

const anyAtivo = usuarios.some((user) => {
    return user.active === true;
})

console.log(anyAtivo);

const usuariosOrdem = usuarios.sort((user1,user2) => user1.id - user2.id);
console.log(usuariosOrdem);