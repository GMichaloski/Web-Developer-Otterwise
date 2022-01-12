let arrayGenerico = [6, 8, 7]

let mediaArray = (array) => {
    let media = 0;
    for (let i = 0; i < array.length; i++){
        media += array[i];
    }
    return media / array.length;
}

console.log(mediaArray(arrayGenerico));