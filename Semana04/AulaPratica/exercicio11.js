const arrayGenerico = [' h3ll0 w0rld', ' w3b d3v3l0p3r ', '0tterw1s3', 'j4v4scr1pt '];

let arrumandoPalavras = (array) => {
    let palavrasArrumadas = []
    array.forEach(element => {
        let newWord = element.trim();
        newWord = newWord.replaceAll("3","e");
        newWord = newWord.replaceAll("0","o");
        newWord = newWord.replaceAll("4","a");
        newWord = newWord.replaceAll("1","i");
        palavrasArrumadas.push(newWord);
    });
    return palavrasArrumadas;
}

console.log(arrumandoPalavras(arrayGenerico));