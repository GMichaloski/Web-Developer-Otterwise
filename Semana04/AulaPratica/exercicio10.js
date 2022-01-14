const arrayGenerico1 = [1, -7, -23, 22, -19, 13, 10, -8, 52, -153, -127],
arrayGenerico2 = [-5, -19, 32, 28, 65, -2, -49, -63, 22, 13, 255 ];

const presenteNosDois = (array1,array2) => {
    let presenteNosDois = [];
    array1.forEach(element => {
        if(array2.includes(element)){
            presenteNosDois.push(element);
        }
    });
    return presenteNosDois;
}

console.log(presenteNosDois(arrayGenerico1, arrayGenerico2));
