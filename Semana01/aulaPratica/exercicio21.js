function calculate(operacao,x,y){
    switch (operacao){
        case "Adição":
            return x + y;
        case "Subtração":
            return x - y;
        case "Multiplicação":
            return x * y;
        case "Divisão":
            return x / y;
        default:
            return 0;
        }
        

}

console.log(calculate("Adição", 10, 5));
console.log(calculate("Multiplicação", 10, 5));