const users = [
    {
        name: "Joao",
        skills: ["Javascript", "ReactJS", "Redux"]
    },
    {
        name: "Pedro",
        skills: ["VueJS", "Ruby on Rails", "Elixir"]
    }
]


 // Tirar dúvida depois!
function skillsPrinter(obj){
    console.log(obj.name);
    for (let i = 0; i < obj.skills; i++){
        console.log(obj.skills[i]);
    }
}
skillsPrinter(users[0]);
skillsPrinter(users[1]);