// Métodos de iteração

const users = ["Joao", "Gustavo", "Emerson", "Wallace"];

// foreach

users.forEach((user,index,array) => {
    console.log(user);
    console.log(index);
    console.log(array);
})

// filter

// Lista as ocorrências

const numbers = [20,1,5,30,76];
const filteredArray = numbers.filter((number) => { return number > 10;})

console.log(filteredArray);

// find

// Acha a primeira ocorrência 

const studentsAndTeachers = [
    {
        name: "joao",
        role: "professor"
    },
    {
        name: "victor",
        role: "estudante"
    },
    {
        name: "gustavo",
        role: "estudante"
    }
]

const student = studentsAndTeachers.find((user) => {
    return user.role === "estudante";
})

console.log(student);

// every 

const isEveryStudent = studentsAndTeachers.every((user) => {
    return user.role === "estudante";
});
console.log(isEveryStudent);

// some

const hasTeacher = studentsAndTeachers.some((user)=>{
    return user.role === "professor";
});

console.log(hasTeacher);

// sort 

console.log([10,4,1,7,3].sort((a,b) => a - b));

// reduce

const numbersToReduce = [-8,12,76,100,-230,-7,120];

const sum = numbersToReduce.reduce((acc, num) => {
    return acc+num;
}, 0);

console.log(sum);