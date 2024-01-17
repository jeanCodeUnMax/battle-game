const charactersList = JSON.parse(localStorage.getItem("charactersList"));

let character1Name = document.querySelector('#character-01 .character-name');
let character2Name = document.querySelector('#character-02 .character-name');
let character1Img = document.querySelector('#character-01 img');
let character2Img = document.querySelector('#character-02 img');
let character1PV = document.querySelector('#pv-value-character-01');
let character2PV = document.querySelector('#pv-value-character-02');
let btnAttack = document.querySelector('.btn-attack');
let btnHealth = document.querySelector('.btn-health');

let currentPlayer = 0;


class Game {
  isEndGame(){
    // lorsque un playeur n'as plus
  }
  starGame(){}
  resetGame(){}
  refreshDom(){}
  getRandomValue(value) {
    return Math.floor(Math.random() * value)+5;
  }
  changeActivePlayer(){}

 
 



}
class Personnage {
  constructor(fullname, vie, mana) {
    this.fullname = fullname; 
    this.vie = vie; 
    this.mana = mana;
    this.vieMax = vie;
    this.defence = 100;
    this.force = 100;
    this.magie = 100;
    this.espris = 100;


  }

  presentation() {
    console.log(`Bonjour je suis ${this.name} est j'ai ${this.vie} points de vie`); 
  }

  attack(target) {
    const degats = this.getRandomValue(20);
    console.log(`${this.fullname} attaque ${target.fullname}`); 

    target.receiveDegat(degats*this.force); 
  }
  recevoirDegat(degats,target) {
    target.vie -= degats/this.defence; 
    console.log(`${target.fullname} a perdu ${degats} point de vie`);
  }

  health(target,health){
    const health = this.getRandomValue(20);
    console.log(`${target.fullname} se soigne et se renforce ! ta as maintenant  ${target.vie} de vie..`);

    target.receiveHealth(10); 
    
  }
  receiveHealth(health,target) {
    target.vie +=  health; 

       console.log(`${target.fullname} se soigne et se renforce ! `); 
    
  }
   


}

const character1 = new PersonnageGame(
  charactersList[0].name, 150, 150
) ;

const character2 = new PersonnageGame(
  charactersList[1].name, 150, 150
) ;





// character1Name.innerText  =  charactersList[0].name;
// character2Name.innerText  =  charactersList[1].name;

character1Name.innerText  =  character1.fullname;
character2Name.innerText  =  character2.fullname;
character1Img.src  =  charactersList[0].img;
character2Img.src  =  charactersList[1].img;




let attack = getRandomValue(20)
this.vie -= attack

let health = getRandomValue(20)
this.vie += health

console.log (attack + ' attack') 

console.log ( health + " health") 



