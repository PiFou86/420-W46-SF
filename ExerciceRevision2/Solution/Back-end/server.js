import express from "express";
import { jouerIA, evaluerStatut } from "./fonctionsUtilitaires";

var cors = require('cors');
var app = express();

app.use(cors());
app.use(express.json());

//Jeu tic-tac-toe de 9 tuiles
//0: vide, 1: X, 2: Y
//L'ordinateur joue les O et le joueur les X
let jeu = [0, 0, 0, 0, 0, 0, 0, 0, 0];

app.post('/executerTour', (req, reponse) => {
    jeu[req.body.choix] = 1;
    let statut = evaluerStatut(jeu);
    if (statut == 'enCours') {
        jouerIA(jeu);
        statut = evaluerStatut(jeu);
    }
    reponse.send({ jeu: jeu, statut: statut });
});

app.post('/recommencer', (req, reponse) => {
    //Si on voulait que l'ordinateur commence, on pourrait insérer le code ici
    jeu = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    reponse.send({ jeu: jeu, statut: 'enCours' });
});

app.listen(8000, () => console.log("Listening on port 8000"));