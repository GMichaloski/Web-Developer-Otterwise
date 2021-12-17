let array = [' h3ll0 w0rld', ' w3b d3v3l0p3r ', '0tterw1s3', 'j4v4scr1pt '];

for (let i = 0; i < array.length; i++){
    arrayPalavra = array[i].split("");
    array[i] = "";
    for (let j = 0; j < arrayPalavra.length; j++){
        if(arrayPalavra[j] === " "){
            arrayPalavra[j] = ""
        }
        else if (arrayPalavra[j] === "1"){
            arrayPalavra[j] = "i"
        }
        else if (arrayPalavra[j] === "3"){
            arrayPalavra[j] = "e"
        }
        else if (arrayPalavra[j] === "4"){
            arrayPalavra[j] = "a"
        }
        else if (arrayPalavra[j] === "5"){
            arrayPalavra[j] = "s"
        }
        else if (arrayPalavra[j] === "0"){
            arrayPalavra[j] = "o"
        }
        array[i] += arrayPalavra[j];
    }
}   

console.log(array);