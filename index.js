let country = "Minnesota";
const continent = "North America";
let population = "3,490,621";

console.log(country);
console.log(continent);
console.log(population);

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = 78 / (1.69 * 1.69) + 'kg/m²';
let BMIJohn = 92 / (1.95 * 1.95) + 'kg/m²';

console.log(BMIMark, BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
console.log('Mark has the highest BMI of' + ' ' + BMIMark);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
}
console.log("Mark's BMI is higher than John's!");
console.log(`Mark's BMI (27.3) is higher than John's (24.2)!`);


const massMarcus = 95;
const heightMarcus = 1.88;
const massDavid = 85;
const heightDavid = 1.76;

const BMIMarcus = massMarcus / (heightMarcus * heightMarcus) + 'kg/m²';
const BMIDavid = massDavid / heightDavid ** 2 + 'kg/m²';
console.log(BMIMarcus, BMIDavid);

const marcusHigherBMI = BMIMarcus > BMIDavid;
console.log(marcusHigherBMI);
console.log('David has the highest BMI of' + ' ' + BMIDavid);

if (BMIMarcus > BMIDavid) {
  console.log(`Marcus's BMI (${BMIMarcus}) is higher than David's (${BMIDavid})!`)
} else {
console.log(`David's BMI (${BMIDavid}) is higher than Marcus's (${BMIMarcus})!`)
}``
//console.log("David's BMI is higher than Marcus's!");
//console.log(`David's BMI (27.3) is higher than Marcus's (24.2)!`);