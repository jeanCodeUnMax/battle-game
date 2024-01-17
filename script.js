
// base de la POO

class Personnage {
  constructor(name, vie, mana) {
    this.name = name; 
    this.vie = vie; 
    this.mana = mana;
    this.vieMax = vie; 
  }

  presentation() {
    console.log(`Bonjour je suis ${this.name} est j'ai ${this.vie} points de vie`); 
  }

  recevoirDegat(degats) {
    this.vie -= degats; 
    console.log(`${this.name} a perdu ${degats} point de vie`);
  }

  attack(target) {
    console.log(`${this.name} attaque ${target.name}`); 
    target.recevoirDegat(10); 
  }

}

class Sorcier extends Personnage {
  constructor(name, vie, mana) {
    super(name, vie, mana); 
  }

  presentation() {
    console.log(`Bonjour je suis un sorcierblaireau ${this.name} est j'ai ${this.vie} points de vie`); 
  }

  soigner(target) {
    console.log(`${this.name} soigne ${target.name}`); 
    if (this.mana >= 5) {
      this.mana -= 5; 
      target.vie += 20; 
    }
    else {
      console.log(`${this.mana} n'as pas de mana, il a échouer le sort`); 
    }
  }
}


class SorcierMalefique extends Sorcier {
  constructor(name, vie, mana) {
    super(name, vie, mana); 
  }

  presentation() {
    console.log(`Bonjour je suis un sorcier du mal ${this.name} est j'ai ${this.vie} points de vie`); 
  }

  soigner(target) {
    console.log(`${this.name} soigne ${target.name}`); 
    if (this.mana >= 5) {
      this.mana -= 5; 
      target.vie += 20; 
    }
    else {
      console.log(`${this.mana} n'as pas de mana, il a échouer le sort`); 
    }
  }
}


// instancier l'objet 

const arthur = new Personnage("Arthur", 200, 50); 
const merlin = new Sorcier("Merlin", 50, 300); 
arthur.presentation(); 
merlin.presentation(); 
merlin.attack(arthur); 
merlin.attack(arthur); 
merlin.attack(arthur); 

arthur.presentation(); 

// fin de la rage de merlin 
console.log("Merlin se calme");

merlin.soigner(arthur); 

arthur.presentation(); 

// le combat coommence 
console.log("début du combat"); 
arthur.attack(merlin); 

