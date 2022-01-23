import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import TableauTicTacToe from './TableauTicTacToe';

const statutAffichage = {
    'enCours': '',
    'xGagnant': 'Vous avez gagné!',
    'oGagnant': 'Vous avez perdu!',
    'egalite': 'Égalité!'
}

function TicTacToe() {
    const [jeu, setJeu] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [statut, setStatut] = useState('enCours');

    const executerTour = async (tuile) => {
        const res = await fetch('/executerTour', {
            method: 'post',
            body: JSON.stringify({ choix: tuile }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const body = await res.json();
        setJeu(body.jeu);
        setStatut(body.statut);
    }

    const recommencerJeu = async () => {
        const res = await fetch('/recommencer', {
            method: 'post'
        });

        const body = await res.json();
        setJeu(body.jeu);
        setStatut(body.statut);
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 10 }}>
            <span>{statut == 'enCours' ? ' ' : statutAffichage[statut]}</span>
            <TableauTicTacToe jeu={jeu} statut={statut} onClick={(tuile) => executerTour(tuile)} />
            <Button style={{ margin: '10px 0px 0px 0px' }} onClick={() => recommencerJeu()}>Recommencer!</Button>
        </div>
    );
}

export default TicTacToe;
