class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi, I am ${this.name}.`;
  }

  getDefinition() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation = "nowhere") {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let desc = super.getGreeting();

    if (this.homeLocation) {
      desc += `I'm visiting from ${this.homeLocation}`;
    } else {
      desc = desc;
    }

    return desc;
  }
}

const p = new Traveler("Syed", 23, "Malaysia");
const other = new Traveler();

console.log(p.getGreeting());
console.log(other.getGreeting());
