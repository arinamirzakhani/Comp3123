
/* =====================
   Exercise 1
===================== */
const greeter = (names, counter = 1) => {
  const greetText = 'Hello';
  for (let i = 0; i < counter; i++) {
    for (const name of names) {
      console.log(`${greetText} ${name}`);
    }
  }
};

console.log('\n--- Exercise 1 ---');
greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);


/* =====================
   Exercise 2
===================== */
const capitalize = ([first = '', ...rest]) =>
  first.toUpperCase() + rest.join('').toLowerCase();

console.log('\n--- Exercise 2 ---');
console.log(capitalize('fooBar'));  
console.log(capitalize('nodeJs'));  

/* =====================
   Exercise 3
===================== */
const colors = ['red', 'green', 'blue'];
const capitalizedColors = colors.map(capitalize);

console.log('\n--- Exercise 3 ---');
console.log(capitalizedColors); 

/* =====================
   Exercise 4
===================== */
const values = [1, 60, 34, 30, 20, 5];
const filterLessThan20 = values.filter(v => v < 20);

console.log('\n--- Exercise 4 ---');
console.log(filterLessThan20); 
/* =====================
   Exercise 5
===================== */
const arr = [1, 2, 3, 4];
const calculateSum = arr.reduce((sum, n) => sum + n, 0);
const calculateProduct = arr.reduce((prod, n) => prod * n, 1);

console.log('\n--- Exercise 5 ---');
console.log(calculateSum);     
console.log(calculateProduct); 

/* =====================
   Exercise 6
===================== */
class Car {
  constructor(model, year) {
    this.model = model;
    this.year = year;
  }
  details() {
    return `Model: ${this.model} Engine ${this.year}`;
  }
}

class Sedan extends Car {
  constructor(model, year, balance) {
    super(model, year);          
    this.balance = balance;
  }
  info() {
    return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
  }
}

console.log('\n--- Exercise 6 ---');
const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());
