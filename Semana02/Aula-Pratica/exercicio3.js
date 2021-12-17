
let array = ['Angela', 'Rosa', 'Ticiana', 'Carla', 'Renata'],
    frase = "";
for (let i = 0; i < array.length;i++){
    
    if(i === array.length-1){
        frase+=array[i];
    }
    else{frase += array[i] + ", ";}
}
console.log(frase);