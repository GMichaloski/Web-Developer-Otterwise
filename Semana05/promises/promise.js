export const promise = new Promise((resolve, reject) => {
    const string1 = "otterwise";
    const string2 = "otterwise";
    string1 === string2? setTimeout(() => {resolve("DEU BOM")}, 300) : 
    setTimeout(() => {reject("DEU RUIM")}, 300);
});

