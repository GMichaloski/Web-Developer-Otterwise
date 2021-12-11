function freelancer(salario, horas){
    salario = 2 * (salario / 160);
    return horas * salario;
}
console.log(freelancer(2000, 40));