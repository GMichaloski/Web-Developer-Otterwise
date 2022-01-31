import fs from "fs";

const readFile = (path) => {
    try{
    const data = fs.readFileSync(path, 'utf-8');
    return data;
    }catch (error){
        throw error
}}

const handleID = (array) => {
    array.forEach((k,index) => array[index].id = Math.floor(array[index].id))
}

const handlePrices = (array) => {
    array.forEach((k, index) => array[index].preco = `R$${array[index].preco.replaceAll(".",",")}`)
}


/** 
@param path Path to .csv arquive 
*/
export const mapCSV = (path) => {
    const data = readFile(path)
    let objectsCSV = data.replaceAll("\r","").split("\n");
    const indexCSV = objectsCSV.shift().split(","); //To remove CSV's item index from the array
    indexCSV.pop();
    for (let i = 0; i < objectsCSV.length; i++){
        objectsCSV[i] = objectsCSV[i].split(",")
    }

    let objects = []
    for (let j = 0; j < objectsCSV.length; j++){
        let obj = {}
        indexCSV.forEach((k,i) => obj[k] = objectsCSV[j][i]);
        objects.push(obj)
    }
    handlePrices(objects);
    handleID(objects);

    fs.writeFileSync("Produtos.json", JSON.stringify(objects))
};

