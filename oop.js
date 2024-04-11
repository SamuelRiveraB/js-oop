// Factory functions

function createElf(name, weapon) {
  return {
    name,
    weapon,
    attack() {
      return "Attack with " + weapon;
    },
  };
}

const peter = createElf("Peter", "stones");
console.log(peter.attack());
const sam = createElf("Sam", "fire");
console.log(sam.attack());

// Object.create

const elfFunctions = {
  attack() {
    return "Attack with " + this.weapon;
  },
};

function createElfObj(name, weapon) {
  let newElf = Object.create(elfFunctions);
  newElf.name = name;
  newElf.weapon = weapon;
  return newElf;
}

const matt = createElfObj("Matt", "sword");
console.log(matt.attack());

// Constructor functions

function Elf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
}

Elf.prototype.attack = function () {
  return "Attack with " + this.weapon;
};

const luke = new Elf("Luke", "saber");
console.log(luke.attack());

// Classes

class ElfClass {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return "Attack with " + this.weapon;
  }
}

const mia = new ElfClass("Mia", "shield");
console.log(mia.attack());
console.log(mia instanceof ElfClass);

// This

// New binding
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Xavier", 55);

// Implicit binding
const person2 = {
  name: "Karen",
  age: 40,
  hi() {
    console.log("Hi " + this.name);
  },
};

// Explicit binding
const person3 = {
  name: "Karen",
  age: 40,
  hi: function () {
    console.log("Hi " + this.setTimeout);
  }.bind(globalThis),
};

// Arrow function
const person4 = {
  name: "Karen",
  age: 40,
  hi: function () {
    var inner = () => {
      console.log("Hi " + this.name);
    };
    return inner();
  },
};

console.log(person1, person2.hi(), person3.hi(), person4.hi());

class Ogre extends ElfClass {
  constructor(name, weapon, type, color) {
    super(name, weapon);
    this.type = type;
    this.color = color;
  }
  makeFort() {
    return "Strongest fort in the world made";
  }
}

const shrek = new Ogre("Shrek", "stench", "swamp", "green");
console.log(shrek.makeFort());
