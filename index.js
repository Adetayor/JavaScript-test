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

let BMIMark = 78 / (1.69 * 1.69) + 'kg/m2';
let BMIJohn = 92 / (1.95 * 1.95) + 'kg/m2';

console.log(BMIMark, BMIJohn);

let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
console.log('Mark has the highest BMI of' + ' ' + BMIMark);


const massMarcus = "95kg";
const heightMarcus = "1.88m";
const massDavid = "85kg";
const heightDavid = "1.76m";

//const BMIMarcus = massMarcus / (heightMarcus * heightMarcus) + 'kg/m2';
//const BMIDavid = massDavid / heightDavid ** 2 + 'kg/m2';

const BMIMarcus = 95 / (1.88 * 1.88) + 'kg/m2';
const BMIDavid = 85 / 1.76 ** 2 + 'kg/m2';

console.log(BMIMarcus, BMIDavid);

const marcusHigherBMI = BMIMarcus > BMIDavid;
console.log(marcusHigherBMI);
console.log('David has the highest BMI of' + ' ' + BMIDavid);