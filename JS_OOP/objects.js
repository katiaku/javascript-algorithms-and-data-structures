// Object literal data structure
let programmer = {
  name: "John",
  preferredLanguage: "JavaScript",
  sayHi: function () {
    console.log("Hi, my name is " + this.name);
  },
  writeCode: function () {
    console.log("I am coding in " + this.preferredLanguage);
  },
}

programmer.sayHi(); // Hi, my name is John
programmer.writeCode(); // I am coding in JavaScript

// Factory function
function createProgrammer(name, preferredLanguage) {
  return {
    name,
    preferredLanguage,
    sayHi: function () {
      console.log("Hi, my name is " + this.name);
    },
    writeCode: function () {
      console.log("I am coding in " + this.preferredLanguage);
    },
  };
}

const newProgrammer = createProgrammer("Jane", "Python");
newProgrammer.sayHi(); // Hi, my name is Jane

// Constructor function
function Programmer(name, preferredLanguage) {
  this.name = name;
  this.preferredLanguage = preferredLanguage;
  this.sayHi = function () {
    console.log("Hi, my name is " + this.name);
  };
  this.writeCode = function () {
    console.log("I am coding in " + this.preferredLanguage);
  };
}

const anotherProgrammer = new Programmer("Alice", "Java");
anotherProgrammer.writeCode(); // I am coding in Java

console.log(anotherProgrammer.constructor); // [Function: Programmer]
console.log(anotherProgrammer instanceof Programmer); // true

// Value vs reference
// Primitive JS types: number, string, boolean, null, undefined, Symbol, BigInt
// Passed by value (by copy, meaning they occupy a different place in memory)
let a = 10;
let b = a;
a = 20;
console.log(a); // 20
console.log(b); // 10

// Complex JS type: Object (+ Array, Function)
// Passed by reference: both point to the same place in memory
let c = { value: 10 };
let d = c;
c.value = 20;
console.log(c.value); // 20
console.log(d.value); // 20

//Adding and removing a property
const person = {
  name: "John",
}

console.log(person); // { name: 'John' }

person.age = 30;
console.log(person); // { name: 'John', age: 30 }

person["favoriteCity"] = "New York";
console.log(person); // { name: 'John', age: 30, favoriteCity: 'New York' }

delete person.age;
console.log(person); // { name: 'John', favoriteCity: 'New York' }

person.move = function (city) {
  console.log("Moving to " + city);
}
console.log(person); // { name: 'John', favoriteCity: 'New York', move: [Function: move] }


// Keys and Values
const keys = Object.keys(person);
for (const key of keys) {
  console.log(key); // name, favoriteCity
}

const values = Object.values(person);
for (const value of values) {
  console.log(value); // John, New York
}

const entries = Object.entries(person);
for (const [key, value] of entries) {
  console.log(key, value); // name John, favoriteCity New York
}

// Abstraction
function Coder(name, preferredLanguage) {
  this.name = name;
  this.preferredLanguage = preferredLanguage;

  // Public method
  this.writeCode = function () {
    console.log(`${this.name} is coding in ${this.preferredLanguage}`);
  }

  // Private method
  const drinkCoffee = function () {
    console.log(`${this.name} drinks coffee`);
  }.bind(this);

  // Public method
  this.startDay = function () {
    drinkCoffee();
  }
}

const coder = new Coder("John", "JavaScript");
coder.writeCode(); // John is coding in JavaScript
coder.drinkCoffee(); // Error: coder.drinkCoffee is not a function
coder.startDay(); // John drinks coffee

// Private properties and methods
// Closures help us achieve encapsulation
function makeFunctions() {
  let privateNum = 0;

  function privateIncrement() {
    privateNum++;
  }

  return {
    logNum: () => console.log(privateNum),
    increment: () => {
      privateIncrement();
      console.log("Incremented");
    }
  }
}

const { logNum, increment } = makeFunctions();
logNum(); // 0
increment(); // Incremented
logNum(); // 1

// Geters and setters
function Programmer(name, preferredLanguage) {
  // Private property
  let privateName = name;

  Object.defineProperty(this, {
    "name": {
      get: function () {
        return privateName;
      },
      set: function (newName) {
        if (!newName) {
          console.log("Name cannot be empty");
          return;
        }
        privateName = newName;
      }
    }
  })

  // Public property
  this.preferredLanguage = preferredLanguage;

  // Public method
  this.writeCode = function () {
    console.log(`${privateName} codes in ${this.preferredLanguage}`);
  }

  // Private method
  let drinkCoffee = function () {
    console.log(`${privateName} drinks coffee`);
  }

  // Public method that uses a closure
  this.startDay = function () {
    drinkCoffee();
  }
}

const programmer2 = new Programmer("Alice", "Rust");
programmer2.writeCode(); // Alice codes in Rust
programmer2.drinkCoffee(); // Error: programmer2.drinkCoffee is not a function
programmer2.startDay(); // Alice drinks coffee

console.log(programmer2.name); // Alice
programmer2.name = "Bob";
console.log(programmer2.name); // Bob
