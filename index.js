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
const tin = bil <= 300 && bil >= 50 ? bil * 0.15 : bil * 0.2;
console.log(`The bil was ${bil}, the tip was ${tin}, and the total value ${bil + tin}`);

const bol = 430;
const tim = bol <= 300 && bol >= 50 ? bol * 0.15 : bol * 0.20;
console.log(`The bol was ${bol}, the tip was ${tim}, and the total value ${bol + tim}`);


const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
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
scoreDolphins = calcAverage(85, 54, 51);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);


const calcTip = function(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

//const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
//const totals = bills + tips; //Cannot work becos each of the arrays will be transformed into a string, and the 2 strings will be concantenated
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);


//Challenge 5
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

mark.calcBMI();          //this.bmi will be substitued for mark.bmi
john.calcBMI();

console.log(mark.bmi, john.bmi);

//"John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if(mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}
*/

const calcTip = function(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 185, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    //sum = sum + arr(i);
    sum += arr[i];
  }
  //console.log(sum);
  return sum / arr.length;
}
//console.log(calcAverage([2, 3, 6]));
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
