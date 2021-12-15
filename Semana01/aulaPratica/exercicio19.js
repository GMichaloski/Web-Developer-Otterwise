function checkSignal(x){
    if (x > 0){
        console.log(x + " é positivo");
    }
    else if( x < 0){
        console.log(x + " é negativo");
    }
    else{
        console.log("x é igual a zero")
    }
}
checkSignal(10);
checkSignal(-23);