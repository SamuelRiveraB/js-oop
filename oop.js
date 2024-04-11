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
