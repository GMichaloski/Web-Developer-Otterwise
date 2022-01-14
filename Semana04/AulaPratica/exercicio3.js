const arrayGenerico = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127];

const imprimirPositivos = (array) => {
    let newArray = []
  array.forEach((element) => {
    if (element > 0) {
      newArray.push(element);
    }
  });
  return newArray;
};

console.log(imprimirPositivos(arrayGenerico));

const imprimirNegativos = (array) => {
    let newArray = []
  array.forEach((element) => {
    if (element < 0) {
      newArray.push(element);
    }
  });
  return newArray;
};

console.log(imprimirNegativos(arrayGenerico));

const imprimirPares = (array) => {
    let newArray = []
  array.forEach((element) => {
    if (element % 2 === 0) {
      newArray.push(element);
    }
  });
  return newArray;
};

console.log(imprimirPares(arrayGenerico));

const imprimirImpares = (array) => {
    let newArray = []
  array.forEach((element) => {
    if (element % 2 !== 0) {
      newArray.push(element);
    }
  });
  return newArray;
};

console.log(imprimirImpares(arrayGenerico));
