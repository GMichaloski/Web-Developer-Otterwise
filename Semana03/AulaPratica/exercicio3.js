const melhorProposta = (propCLT,propPJ) => {
    propCLT = (propCLT * 13) + ((propCLT * 0.08 + 700)*12);
    propPJ = propPJ * 12;
    return propPJ > propCLT? "A proposta PJ é mais vantajosa":"A proposta CLT é mais vantajosa";
}
console.log(melhorProposta(1000,1800));