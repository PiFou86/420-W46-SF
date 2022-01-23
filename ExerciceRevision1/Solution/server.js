import express from "express";

var cors = require('cors');
var app = express();

app.use(cors());
app.use(express.json());

//Si on voulait ajouter our retirer des options, ce serait ici
const options = ['Roche', 'Papier', 'Ciseaux'];

//Si on change les options, il faudrait modifier cette fonction
const determinerGagnant = (choixJoueur, choixOrdi) => {
    if (choixOrdi == 'Roche' && choixJoueur == 'Ciseaux' || choixOrdi == 'Papier' && choixJoueur == 'Roche' || choixOrdi == 'Ciseaux' && choixJoueur == 'Papier') {
        console.log('ordiGagne');
        return ['ordiGagne', choixOrdi];
    }
    else if (choixJoueur == 'Roche' && choixOrdi == 'Ciseaux' || choixJoueur == 'Papier' && choixOrdi == 'Roche' || choixJoueur == 'Ciseaux' && choixOrdi == 'Papier') {
        console.log('joueurGagne');
        return ['joueurGagne', choixOrdi];
    }
    else {
        console.log('Egalite');
        return ['egalite', choixOrdi];
    }
}

const jouerTour = (choixJoueur) => {
    const choixOrdi = options[Math.floor(Math.random() * options.length)];
    return determinerGagnant(choixJoueur, choixOrdi);
}

app.get('/options', (req, reponse) => {
    reponse.send(options);
});

app.post('/jouer', (req, reponse) => {
    console.log('Body', req.body);
    const [resultat, choixOrdi] = jouerTour(req.body.choix);
    reponse.send({ resultat, choixOrdi });
});

app.listen(8000, () => console.log("Listening on port 8000"));