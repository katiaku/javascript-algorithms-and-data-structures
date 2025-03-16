// Prototypical inheritance
let user = {
  name: "John",
  surname: "Doe",
  email: "jdoe@example.com",
  isActive: true,

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  login() {
    console.log(`${this.email} has logged in.`);
  },

  logout() {
    console.log(`${this.email} has logged out.`);
  },
}

let admin = {
  __proto__: user,
  isAdmin: true,

  manageUsers() {
    console.log(`${this.fullName} is managing users.`);
  }
}

let guest = {
  __proto__: user,
  isGuest: true,

  browseContent() {
    console.log(`${this.fullName} is browsing content.`);
  }
}

let superAdmin = {
  __proto__: admin,
  isSuperAdmin: true,

  manageAdmins() {
    console.log(`${this.fullName} is managing admins.`);
  }
}

const programmerPrototype = {
  writeCode: function () {
    console.log(`Writing code in ${this.preferredLanguage}.`);
  },
  drinkCoffee: function () {
    console.log("Drinking coffee.");

  }
}

function Programmer(name, preferredLanguage) {
  let privateName = name;
  this.preferredLanguage = preferredLanguage;

  Object.defineProperties(this, {
    "name": {
      get: function () {
        return privateName;
      },
      set: function (newName) {
        privateName = newName;
      }
    }
  });

  // Inherit common behavior
  Object.setPrototypeOf(this, programmerPrototype);
}

const jsProgrammer = new Programmer("John", "JavaScript");
jsProgrammer.writeCode(); // Writing code in JavaScript.
jsProgrammer.drinkCoffee(); // Drinking coffee.
console.log(jsProgrammer.name); // John
jsProgrammer.name = "Bob";
console.log(jsProgrammer.name); // Bob

console.log(jsProgrammer.hasOwnProperty("name")); // true
console.log(jsProgrammer.hasOwnProperty("writeCode")); // false

// Multilevel inheritance
let myArray = [];
// myArray(array) -> Array.prototype(ArrayBase) -> Object.prototype(ObjectBase)

// Property descriptors
let person = {
  name: "Steven",
}

console.log(person); // { name: 'Steven' }

for (let key in person) {
  console.log(key); // name
}

console.log(Object.keys(person)); // [ 'name' ]

let objectBase = Object.getPrototypeOf(person);
const propertyDescriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
console.log(propertyDescriptor); // { value: [Function: toString], writable: true, enumerable: false, configurable: true }

Object.defineProperty(person, "name", {
  writable: false, // modify
  enumerable: false, // enumerate
  configurable: true, // reconfigure
});

for (let key in person) {
  console.log(key); //
}

// Defining methods on the prototype of a constructor function
// according to DRY principle
function Programmer(name) {
  this.name = name;
}

Programmer.prototype.code = function () {
  console.log(`${this.name} is coding.`);
};

Programmer.prototype.debug = function () {
  console.log(`${this.name} is debugging.`);
};

Programmer.prototype.meeting = function () {
  console.log(`${this.name} is attending a meeting.`);
};

const alice = new Programmer("Alice");
const steven = new Programmer("Steven");

alice.code(); // Alice is coding.
steven.code(); // Steven is coding.

function FrontEndProgrammer(name) {
  Programmer.call(this, name);
}

function BackEndProgrammer(name) {
  Programmer.call(this, name);
}

// Setting up inheritance
FrontEndProgrammer.prototype = Object.create(Programmer.prototype);
BackEndProgrammer.prototype = Object.create(Programmer.prototype);

// Resetting the constructor property
FrontEndProgrammer.prototype.constructor = FrontEndProgrammer;
BackEndProgrammer.prototype.constructor = BackEndProgrammer;

const joe = new FrontEndProgrammer("Joe");
joe.code(); // Joe is coding.
joe.debug(); // Joe is debugging.
joe.meeting(); // Joe is attending a meting.

const jane = new BackEndProgrammer("Jane");
joe.code(); // Jane is coding.
joe.debug(); // Jane is debugging.
joe.meeting(); // Jane is attending a meting.

// Calling the super constructor
function Programmer(name, specialization) {
  this.name = name;
  this.specialization = specialization;
}

function FrontEndProgrammer(name, specialization, preferredFramework) {
  Programmer.call(this, name, specialization);
}

const mike = new FrontEndProgrammer("Mike", "Frontend", "React");

function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

extend(FrontEndProgrammer, Programmer);

// Method overriding
FrontEndProgrammer.prototype.code = function () {
  Programmer.prototype.code.call(this); // Call the base implementation
  console.log(`${this.name} is coding in ${this.specialization} with ${this.preferredFramework}.`);
}

// Polymorphism
FrontEndProgrammer.prototype.work = function () {
  console.log(`${this.name} is designing and coding the user interface.`);
}

BackEndProgrammer.prototype.work = function () {
  console.log(`${this.name} is developing server-side logic.`);
}

// Composition using mixins
const canCode = {
  code() {
    console.log(`${this.name} is coding.`);
  }
}

const canReview = {
  review() {
    console.log(`${this.name} is reviewing code.`);
  }
}

function Programmer(name) {
  Employee.call(this, name);
  // Composing the object with necessary functionalities
  Object.assign(this, canCode, canReview);
}

const fibi = new Programmer("Fibi");

fibi.code(); // Fibi is coding.
fibi.review(); // Fibi is reviewing code.

const canEat = {
  eat: function () {
    this.hunger--;
    console.log(`${this.name} is eating.`);
  }
}

const canWalk = {
  walk: function () {
    console.log(`${this.name} is waking.`);
  }
}

const canProgram = {
  program: function () {
    console.log(`${this.name} is programming.`);
  }
}

function Programmer(name) {
  this.name = name;
  this.hunger = 10;
}

Object.assign(Programmer.prototype, canEat, canWalk, canProgram);

const fred = new Programmer("Fred");
programmer.eat(); // Fred is eating.
programmer.walk(); // Fred is walking.
programmer.program(); // Fred is programming.
