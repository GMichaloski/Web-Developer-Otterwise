const impressora = (num1,num2) => {
    let string = "";
    if (!num2){
        for (let i = 1; i <= 10;i++){
            string += `${num1} X ${i} = ${num1*i} \n`;
        }
    }
    else{
        for (let i = 1; i <= num2;i++){
            string +=`${num1} X ${i} = ${num1*i} \n`;
        }
    }
    return string;
}
console.log(impressora(6,14));
