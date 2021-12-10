let x = 2,y = 3,z = 1,temp;

if(y < x){
    temp = x;
    x = y;
    y = temp;
}
if(z < x){
    temp = x;
    x = z;
    z = temp;
}
if(z < y){
    temp = y;
    y = z;
    z = temp;
}

console.log(x + " " + y + " " + z);