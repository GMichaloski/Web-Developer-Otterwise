const arrayGenerico = [{nome: "guga", notas: [10,2,6]},{"nome": "vini", "notas": [0,2,6]}, {"nome": "generico", "notas": [0,0,0]}, {"nome": "ciclano", "notas": [0,0,0]}]

const quemTirouZero = (array) => {
    let tirouZero = []
    let igualAZero = (valor) => valor === 0;
    array.forEach(element => {
        if (element.notas.every(igualAZero)){
            tirouZero.push(element.nome);
        }
        
    });
    return tirouZero;
}

console.log(quemTirouZero(arrayGenerico));