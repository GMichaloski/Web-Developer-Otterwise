function dividirCelulas(num){
    let notasDeCem, notasDeCinquenta, notasDeVinte, notasDeDez, notasDeCinco, moedaDeUm;
    notasDeCem = Math.floor(num / 100);
    num = num % 100;
    notasDeCinquenta = Math.floor(num / 50);
    num = num % 50;
    notasDeVinte = Math.floor(num / 20);
    num = num % 20;
    notasDeDez = Math.floor(num / 10);
    num = num % 10;
    notasDeCinco = Math.floor(num / 5);
    num = num % 5;
    moedaDeUm = Math.floor(num / 1);

    return notasDeCem + " notas de cem \n" + notasDeCinquenta + " notas de cinquenta\n" + notasDeVinte + " notas de vinte\n" + 
    notasDeDez + " notas de dez\n" + notasDeCinco + " notas de cinco\n" + moedaDeUm + " moedas de um\n"; 
}

console.log(dividirCelulas(576));