const characters = document.querySelectorAll('.character');
const btnStart = document.querySelector("button.btn-start");
const charactersList = [];
const charactersNameList = [];

// console.log(characters);

/** Fonction pour activer le personnage **/
const activeCharacter = (el) => el.classList.toggle('active');

/** Fonction pour compter le nbre de personnage actif */
const qtyActiveCharacter = (characters) => {
    let qty = 0;
    characters.forEach(el => {
        if (el.classList.contains('active')) qty++;
    })
    return qty;
}


/** Fonction pour activer le bouton start */
const activeStartBattleBtn = () => {
    btnStart.classList.add('active');
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
        img: characterImg.src
    })
    /** rajoute le nom du caractère selectionné dans le tableau charactersNameList **/
    charactersNameList.push(characterName);
}
else {
    /** supprime le nom du caractère selectionné dans le tableau charactersNameList si doublon **/
    charactersNameList.forEach((el, index)=> {
        charactersNameList.splice(index, 1);
    })
    /** supprime le caractère dans le tableau charactersList si doublon **/
    charactersList.forEach((el, index)=> {
        charactersList.splice(index, 1);
    })
}

}

[...characters].forEach(character => {
    character.addEventListener('click', () => {
        let qtyTotal = qtyActiveCharacter(characters);
        if(qtyTotal < 2) {
            activeCharacter(character);
            addCharacter(character);
            if (qtyTotal === 1) activeStartBattleBtn();
        }
    }
    )}
    )
    
btnStart.addEventListener('click', (e) => jumpGamePage(e))