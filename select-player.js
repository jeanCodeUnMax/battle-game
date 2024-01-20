let characters = document.querySelectorAll('.character');
const btnStart = document.querySelector("button.btn-start");
const charactersList = [];
const charactersNameList = [];

// console.log(characters);

/** Fonction pour activer le personnage **/
const activeCharacter = (el) => el.classList.toggle('active');

/** Fonction pour compter le nbre de personnage actif */
const qtyActiveCharacter = (characters) => {
    let qty = charactersList.filter(item => item.isActive).length;
    return qty;
}


/** Fonction pour activer le bouton start */
const activeStartBattleBtn = () => {
    btnStart.classList.add('active'); // pas mieux de faire un ToggleStartBatleBtn ? 
}

/** Fonction pour desactiver le bouton start */
const desactiveStartBattleBtn = () => {
    btnStart.classList.remove('active'); // pas mieux de faire un ToggleStartBatleBtn ? 
}

/** Redirection vers la page game **/
const jumpGamePage = (e) => {
    if (btnStart.classList.contains('active')) {
        e.preventDefault();
        
        /** Enregistre en localstorage les caractères selectionnées */
        localStorage.setItem('charactersList', JSON.stringify(charactersList))
        
        /** redirection vers la page game */
        window.location.href = "game.html";
    }
}

/** Fonction qui rajoute les caractères selectionnés **/
const addCharacter = (character) => {
    const characterName = character.querySelector('p').textContent;
    const characterImg = character.querySelector('img');

if (!charactersNameList.includes(characterName)){
    /** rajoute un caractère dans le tableau charactersList **/
    charactersList.push({
        name: characterName,
        img: characterImg.src, 
        isActive: false
    })
    /** rajoute le nom du caractère selectionné dans le tableau charactersNameList **/
    charactersNameList.push(characterName);
}
else {
    /** supprime le nom du caractère selectionné dans le tableau charactersNameList si doublon **/
    charactersNameList.forEach((el, index)=> {
        console.log(el)
        charactersNameList.splice(index, 1);
    })
    /** supprime le caractère dans le tableau charactersList si doublon **/
    charactersList.forEach((el, index)=> {
        charactersList.splice(index, 1);
    })
}
console.log('characters' , charactersList)

}

[...characters].forEach(character => {
    character.addEventListener('click', () => {
        let qtyTotal = qtyActiveCharacter(characters) ;
        // quantité total est en retard car pas actualisé avec le dom qui se fait après. 
        // pour résoudre le problème. ne pas se fier au DOM. mais un tableau 
        console.log(`quantité active : ${qtyTotal}`)
        if(charactersList.length <= 2 || true /* juste pour le test*/) {
            activeCharacter(character); // imposible de deselectioner en suivant cette logique
            addCharacter(character); // vous avez penser au removes. 
        }
        charactersList.length === 2 ? activeStartBattleBtn() : desactiveStartBattleBtn(); // pas logique de commencer la batle avec 1 joueurs. 
    }
    )}
    )
    
btnStart.addEventListener('click', (e) => jumpGamePage(e))
