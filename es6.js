const numbers = [89, 35, 98, 12];
const student = {
    name: 'Sakib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}

// 1. template strings
const about = `My name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies${student.movies[0]}` 
console.log(about)

// 2. arrow function
const fiftyFive  = () => 55;
const addSixtyFive = num => num + 65;
const isEven = x =>  x % 2 ==0;
const addThree = (x,y,z) => x +y+z;
const doMath = (num1 , num2) =>{
    const sum = num1 + num2
    return sum;
}

// spread operator
const newNumbers = [...numbers];

numbers.push(99)
numbers.push(99)
numbers.push(99)


// create a new array from an older array and add an element
const currentNumbers = [...numbers, 55];

console.log(numbers)
console.log(newNumbers);
console.log(currentNumbers);