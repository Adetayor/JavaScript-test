let country = "Minnesota";
const continent = "North America";
let population = "3,490,621";

console.log(country);
console.log(continent);
console.log(population);

let massMark = "78kg";
let heightMark = "1.69m";
let massJohn = "92kg";
let heightJohn = "1.95m";

let BMIMark = 78 / (1.69 * 1.69);
let BMIJohn = 92 / (1.95 * 1.95);

console.log(BMIMark, BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
console.log('Mark has the highest BMI of' + ' ' + BMIMark);