// 1 - [REFATORAÇÃO] Pegue um valor de entrada e calcule o menor número de
// notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas
// consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a
// relação de notas necessárias.
let reais = 576;
const notas = (value) => {
    const notasDe100=  Math.floor(value/100)
    value = value %100;
    const notasDe50= Math.floor((value%100)/50)
    value = value %50;
    const notasDe20= Math.floor((value%50)/20)
    value = value %20;
    const notasDe10= Math.floor((value%20)/10)
    value = value %10;
    const notasDe5= Math.floor((value%10)/5)
    value = value %5;
    const notasDe2= Math.floor((value%5)/2)
    value = value %2;
    const notasDe1= Math.floor(value)
    return {
        notasDe100: notasDe100,
        notasDe50: notasDe50,
        notasDe20: notasDe20,
        notasDe10: notasDe10,
        notasDe5: notasDe5,
        notasDe2: notasDe2,
        notasDe1: notasDe1,
    }
}
const {notasDe100, notasDe50,notasDe20,notasDe10,notasDe5,notasDe2,notasDe1} = notas(reais);
console.log(`${reais}
${notasDe100} nota(s) de 100 reais
${notasDe50} nota(s) de 50 reais
${notasDe20} nota(s) de 20 reais
${notasDe10} nota(s) de 10 reais
${notasDe5} nota(s) de 5 reais
${notasDe2} nota(s) de 2 reais
${notasDe1} nota(s) de 1 real`
);