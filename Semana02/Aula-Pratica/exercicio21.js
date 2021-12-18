let experimentos = [
    { quantidade: 10, cobaia: "C" },
    { quantidade: 6, cobaia: "R" },
    { quantidade: 15, cobaia: "S" },
    { quantidade: 5, cobaia: "C" },
    { quantidade: 14, cobaia: "R" },
    { quantidade: 9, cobaia: "C" },
    { quantidade: 6, cobaia: "R" },
    { quantidade: 8, cobaia: "S" },
    { quantidade: 5, cobaia: "C" },
    { quantidade: 14, cobaia: "R" }
    ];

    let rato = 0, sapo = 0, coelho = 0;
    for (let i = 0; i < experimentos.length; i++){
        switch (experimentos[i].cobaia){
            case "C":
                coelho += experimentos[i].quantidade;
                break;
            case "R":
                rato += experimentos[i].quantidade;
                break;
            case "S":
                sapo += experimentos[i].quantidade;
                break;
        }
    }

total = rato + coelho + sapo;
console.log(`Total de animais: ${total}`);
console.log(`Total de ratos: ${rato}`);
console.log(`Total de coelhos: ${coelho}`);
console.log(`Total de sapos: ${sapo}`);
console.log(`Percentual de ratos: ${((rato/total)*100).toPrecision(4)}%`);
console.log(`Percentual de coelhos: ${((coelho/total)*100).toPrecision(4)}%`);
console.log(`Percentual de sapos: ${((sapo/total)*100).toPrecision(4)}%`);
