// Funções regulares

function soma(numberOne, numberTwo){
    return (numberOne + numberTwo);
}

function selectOperation(operacao){
    switch (operacao){
        case "+":
            return "Adição";
        case "-":
            return"Subtração";
        case "*":
            return"Multiplicação";
        case "%":
            return"Divisão";
    }
}