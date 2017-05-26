class Person {
  constructor(name, favColor){
    this.name = name,
    this.favColor = favColor,
  }


  greet(){
    console.log("SUP!. I am " + this.name+ " and I love the color " + this.favColor + ".");
  }
};

module.exports = Person;
