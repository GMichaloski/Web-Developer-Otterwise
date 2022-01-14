const arrayGenerico  = ['Angela', 'Rosa', 'Ticiana', 'Carla', 'Renata'];

function impressoraNomes(array){
    array.forEach(element => {
    console.log(element);    
    });
}

impressoraNomes(arrayGenerico);