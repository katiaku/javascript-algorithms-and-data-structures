function Programmer(name, preferredLanguage) {
  this.name = name;
  this.preferredLanguage = preferredLanguage;

  this.code = function () {
    console.log(`${this.name} is coding in ${this.preferredLanguage}.`);
  }
}

const programmer = new Programmer("John", "JavaScript");
programmer.code(); // John is coding in JavaScript.

// ES6 syntax
class Programmer {
  constructor(name, preferredLanguage) {
    this.name = name;
    this.preferredLanguage = preferredLanguage;
  }

  code() {
    console.log(`${this.name} is coding in ${this.preferredLanguage}.`);
  }
}

// Hoisting
// Function declarations
greet(); // Hello, world!
function greet() {
  console.log("Hello, world!");

}

// Function expressions
sayBye(); // Reference Error
const sayBye = function () {
  console.log("Bye!");
}

// Class declarations are not hoisted
// Class expressions are not hoisted
const myProgrammer = new MyProgrammerClass("John", "JavaScript");
myProgrammer.code(); // Reference Error

const MyProgrammerClass = class {
  constructor(name, preferredLanguage) {
    this.name = name;
    this.preferredLanguage = preferredLanguage;
  }

  code() {
    console.log(`${this.name} is coding in ${this.preferredLanguage}.`);
  }
}

// Static methods vs instance methods
// Static methods in JavaScript are functions that belong to a class rather than 
// to instances of that class. They cannot access instance-specific data (i.e., this 
// inside a static method doesn't refer to any instance). Often used for utility
// functions.
class Programmer {
  constructor(name, preferredLanguage) {
    this.name = name;
    this.preferredLanguage = preferredLanguage;
  }

  code() {
    console.log(`${this.name} is coding in ${this.preferredLanguage}.`);
  }

  static compareSkill(programmer1, programmer2) {
    return programmer1.preferredLanguage === programmer2.preferredLanguage;
  }
}

const dev1 = new Programmer("John", "JavaScript");
const dev2 = new Programmer("Alice", "Java");
console.log(Programmer.compareSkill(dev1, dev2)); // false

// "This" keyword
function programmer(name) {
  this.name = name;
  this.code = function () {
    console.log(this);
  }
}

const programmer = new Programmer("John");
programmer.code(); // Programmer {name: 'John', code: f}

const detachedCode = programmer.code;
detachedCode(); // Window (the context is lost)

// We have to add "use strict" before the function declaration to avoid this
detachedCode(); // undefined (the context is lost)

// Class is using strict mode by default

// Abstraction in classes: private properties and methods
class Programmer {
  constructor(name, language) {
    // Not truly private, just a  naming convention
    this._language = language;
  }
}

const programmer = new Programmer("John", "JavaScript");
console.log(programmer._language); // JavaScript (still accessible)

const _language = Symbol();
const _code = Symbol();

class Programmer {
  constructor(name, language) {
    // More private, but still accessible through reflection
    this[_language] = language; // using bracket notation
  }

  // Private method
  [_code]() {
    console.log(`${this.name} is coding in ${this._language}.`);
  }
}

const programmer = new Programmer("John", "JavaScript");
console.log(Object.getOwnPropertySymbols(programmer)); // [Symbol()] -> 0: Symbol()
const languageSymbol = Object.getOwnPropertySymbols(programmer)[0];
console.log(programmer[languageSymbol]); // JavaScript

class Programmer {
  #language;

  constructor(name, language) {
    this.name = name;
    this.#language = language;
  }

  // Truly private method
  #code() {
    console.log(`Coding in ${this.#language}.`);
  }
}

const programmer = new Programmer("John", "Go");
console.log(programmer.#language); // Reference Error

// Private members using WeakMaps
// A WeakMap is a collection of key-value pairs where the keys are
// objects that are weakly referenced, allowing for garbage collection
// when the keys are no longer in use.

const _framework = new WeakMap();
const _work = new WeakMap();

class Programmer {
  constructor(name, framework) {
    this.name = name;

    // Store framework in a WeakMap with "this" as the key
    _framework.set(this, framework);

    // Store a private method in a WeakMap
    _work.set(this, function () {
      console.log(`${this.name} is coding in ${_framework.get(this)}.`);
    });
  }

  code() {
    // Access and invoke the private method
    _work.get(this)();
  }
}

const matt = new Programmer("Matt", "React");
matt.code(); // Matt is coding in React.

// Getters and setters with WeakMaps
const _tool = new WeakMap();

class Programmer {
  constructor(name, tool) {
    this.name = name;
    _tool.set(this, tool);

    // Object.defineProperty(this, "tool", {
    //   get: function () {
    //     return _tool.get(this);
    //   }
    // })
  }

  // getTool() {
  //   return _tool.get(this);
  // }

  // Cleaner syntax for getters and setters
  get tool() {
    return _tool.get(this);
  }

  set tool(newTool) {
    if (!newTool) throw new Error("Tool cannot be empty");
    _tool.set(this, newTool);
  }
}

const sam = new Programmer("Sam", "VS Code");
// console.log(sam.getTool()); // VS Code
console.log(sam.tool); // VS Code
sam.tool = "Sublime Text";
console.log(sam.tool); // Sublime Text

// Inheritance with ES6 classes
class Programmer {
  constructor(name) {
    this.name = name;
  }

  code() {
    console.log(`${this.name} is coding.`);
  }
}

class FrontendProgrammer extends Programmer {
  constructor(name, tools) {
    // Calls the superclass constructor with the name
    super(name);
    // Additional property specific to FrontendProgrammer
    this.tools = tools;
  }

  code() {
    super.code(); // Call the generic code method from thr base class
    console.log(`${this.name} is coding in ${this.tools}.`);
  }

  design() {
    console.log(`${this.name} also designs the user interfaces.`);
  }
}

const gabriel = new FrontendProgrammer("Gabriel", "React");
gabriel.code(); // Gabriel is coding in React.
gabriel.design(); // Gabriel also designs the user interfaces.
