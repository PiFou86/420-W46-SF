//Permet à l'ordinateur de choisir aléatoirement
//une case disponible dans le jeu
const jouerIA = (jeu) => {
    if (!jeu.includes(0)) {
        throw "Erreur au tour de l'IA: il n'y a pas de tuile disponible";
    }
    let choix = -1;
    while (jeu[choix] != 0) {
        choix = Math.floor(Math.random() * 9);
    }
    jeu[choix] = 2;
}

//Evalue le statut du jeu
//Retourne le statut sous forme de string
//Valeurs possibles: xGagnant, oGagnant, enCours, egalite
const evaluerStatut = (jeu) => {
    //Verifications verticale
    for (let i = 0; i < 3; i++) {
        if (jeu[i] != 0) {
            if (jeu[i] == jeu[i + 3] && jeu[i] == jeu[i + 6]) {
                if (jeu[i] == 1) {
                    return 'xGagnant';
                }
                else {
                    return 'oGagnant';
                }
            }
        }
    }

    //Verifications horizontale
    for (let i = 0; i < 3; i++) {
        if (jeu[i * 3] != 0) {
            if (jeu[i * 3] == jeu[i * 3 + 1] && jeu[i * 3] == jeu[i * 3 + 2]) {
                if (jeu[i * 3] == 1) {
                    return 'xGagnant';
                }
                else {
                    return 'oGagnant';
                }
            }
        }
    }

    //Verifications diagonales
    if (jeu[4] != 0) {
        if (jeu[2] == jeu[4] && jeu[2] == jeu[6] || jeu[0] == jeu[4] && jeu[0] == jeu[8]) {
            if (jeu[4] == 1) {
                return 'xGagnant';
            }
            else {
                return 'oGagnant';
            }
        }
    }

    if (!jeu.includes(0)) {
        return 'egalite';
    }

    return 'enCours';
}

export { jouerIA, evaluerStatut };