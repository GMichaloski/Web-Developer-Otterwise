function CLTouPJ(prop1, prop2){
    let valorCLT, valorPJ;
    valorCLT = 12 * (prop1 + 700) + prop1 + 0.08 * prop1;
    valorPJ = prop2 * 12;
    if (valorCLT >= valorPJ){
        console.log("Nesse caso, a proposta CLT é mais vantajosa!");
    }
    else {
        console.log("Nesse caso, a proposta PJ é mais vantajosa!")
    }
}
CLTouPJ(1000, 1750);