class Pet {
<<<<<<< HEAD
    petSound;
    petFeeding;

    constructor (species) {
      this.species = species
    }

    speak () {
      return 'No words'
=======
    constructor(species) {
        this.species = species;
    }
    speak() {
        return "No words";
>>>>>>> b09e84dd73f19a1601e6a93cb4e7bf1317d827be
    }
}

class Cat extends Pet {
<<<<<<< HEAD
  constructor (props) {
    super('cat')
    this.props = props
  }

    clickHandler = parameter => parameter + this.props.name;

    speak () {
      this.clickHandler()
      return `${super.speak()} Meow, I am a ${this.species}`
    }
}

function makePetSpeak (pet) {
  console.log(pet.speak())
}

var myPet = new Pet()
makePetSpeak(myPet)

var myCat = new Cat({ name: 'Mr. Whiskers' })
makePetSpeak(myCat)

var newFunc = myCat.clickHandler
console.log(newFunc('My name is '))
=======
    constructor(props) {
        super("cat");
        this.props = props;
    }
    clickHandler = parameter => parameter+this.props.name;
    speak() {
        this.clickHandler();
        return `${super.speak()} Meow, I am a ${this.species}`;

    }
}

function makePetSpeak(pet) {
    console.log(pet.speak());
}

var myPet = new Pet();
makePetSpeak(myPet);
// console.log(myPet.speak());
var myCat = new Cat({name:"Luna Lovegood"});
makePetSpeak(myCat);
var newFunc = myCat.clickHandler;
console.log(newFunc("My name is "));
>>>>>>> b09e84dd73f19a1601e6a93cb4e7bf1317d827be
