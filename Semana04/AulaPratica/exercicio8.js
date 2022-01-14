const arrayGenerico = ["Juliana", "Pedro", "Regina", "João", "Patrícia", "Gabriel", "Carlos", "Carla"]

const existeNoArray = (array, nome) => {
    if(array.includes(nome)){
        return `${nome} está no Array!`
    }
    else {
        return `${nome} não está no Array!`
    }
}

console.log(existeNoArray(arrayGenerico, "Carla"));