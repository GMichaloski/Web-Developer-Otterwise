let x = 2,y = 4, temp;

if(y > x){
    temp = y;
    y = x;
    x = y;
}

if((x % y) === 0 ){
    console.log("São múltiplos");
}
else{
    console.log("Não são múltiplos");
}