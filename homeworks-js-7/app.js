
let number = 8; 
let isEven = number % 4 === 0; 
console.log(isEven); 

let numbers = [1, 4, 7, 9, 12]; 
let maxNumber = numbers[0]; 
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i]; 
    }
}
console.log(maxNumber);