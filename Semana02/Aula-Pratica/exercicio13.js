let array =["Juliana", "Pedro", "Regina", "João", "Carla", "Carlos"],
pesquisa = "Carla",
contem = false;
for (let i = 0; i < array.length;i++){  
    if (array[i] === pesquisa){
        contem = true;
    }
}
if (contem){
    console.log(`O nome ${pesquisa} existe no Array!`);
}
else{
    console.log(`O nome ${pesquisa} não existe no Array!`);
}