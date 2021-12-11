function tempo(segs){
    let horas, minutos, segundos;
    horas = Math.floor(segs / 3600);
    segs = segs % 3600;
    minutos = Math.floor(segs / 60);
    segundos = segs % 60;
    return horas + ":" + minutos + ":" + segundos;
}
console.log(tempo(600));
console.log(tempo(33567));
