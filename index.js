/*
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

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
  console.log('Dolphins wins the Trophy 🏆');
} else if (scoreKoalas > scoreDolphins) {
  console.log('Koalas wins the Trophy 🏆');
} else if (scoreDolphins === scoreKoalas) {
  console.log('Both wins the Trophy 🏆');
}

const scoreArsernal = (97 + 112 + 101) / 3;
const scoreMadrid = (109 + 95 + 123) / 3;
console.log(scoreArsernal, scoreMadrid);

if (scoreArsernal > scoreMadrid && scoreArsernal == 100) {
  console.log('Arsernal wins the Trophy 🏆');
} else if (scoreMadrid > scoreArsernal) {
  console.log('Madrid wins the Trophy 🏆');
} else if (scoreArsernal === scoreMadrid) {
  console.log('Both wins the Trophy 🏆');
}

const scoreEyimba = (97 + 112 + 101) / 3;
const scoreOlukoya = (109 + 95 + 106) / 3;
console.log(scoreEyimba, scoreOlukoya);

if (scoreEyimba > scoreOlukoya && scoreEyimba >= 100) {
  console.log('Eyimba wins the Trophy 🏆');
} else if (scoreOlukoya > scoreEyimba) {
  console.log('Koalas wins the Trophy 🏆');
} else if (scoreEyimba === scoreOlukoya) {
  console.log('Both wins the Trophy 🏆');
}

const scoreAston = (97 + 112 + 81) / 3;
const scoreJuventus = (109 + 95 + 86) / 3;
console.log(scoreAston, scoreJuventus);

if (scoreAston > scoreJuventus && scoreAston >= 100) {
  console.log('Aston Villa wins the Trophy 🏆');
} else if (scoreJuventus > scoreAston && scoreJuventus >= 100) {
  console.log('Koalas wins the Trophy 🏆');
} else if (scoreAston === scoreJuventus && scoreAston >= 100 && scoreJuventus >= 100) {
  console.log('Both wins the Trophy 🏆');
} else {
  console.log('No one wins the trophy 😞');
}


const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

const bil = 40;
const tin = bil <= 300 && bil >= 50 ? bil * 0.15 : bil * 0.20;
console.log(`The bil was ${bil}, the tip was ${tin}, and the total value ${bil + tin}`);

const bol = 430;
const tim = bol <= 300 && bol >= 50 ? bol * 0.15 : bol * 0.20;
console.log(`The bol was ${bol}, the tip was ${tim}, and the total value ${bol + tim}`);
*/

const calcAverage = (a, b, c) => (a, b, c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins wins 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`koalas wins 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No Team Wins...');
  }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2