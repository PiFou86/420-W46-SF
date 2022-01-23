import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

//Permet de faire la traduction entre le retour du serveur et une phrase pour l'affichage
const resultatAffichage = {
    'joueurGagne': 'Vous avez gagné!',
    'ordiGagne': 'Vous avez perdu!',
    'egalite': 'Égalité!'
}

function RochePapierCiseaux() {
    const [commence, setCommence] = useState(false);
    const [options, setOptions] = useState(null)
    const [choixOrdi, setChoixOrdi] = useState(null);
    const [resultat, setResultat] = useState(null);

    useEffect(() => {
        const chercherOptions = async () => {
            const res = await fetch('/options');
            const body = await res.json();
            setOptions(body);
        }
        chercherOptions();
    }, [])

    const jouer = async (optionChoisie) => {
        const res = await fetch('/jouer', {
            method: 'post',
            body: JSON.stringify({ choix: optionChoisie }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const body = await res.json();

        setChoixOrdi(body.choixOrdi);
        setResultat(body.resultat);
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 10 }}>
            <h1>Roche Papier Ciseaux</h1>
            {!commence &&
                <Button onClick={() => setCommence(true)}>Commencer</Button>
            }
            {commence && options &&
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {choixOrdi && <span>Votre adversaire a joué: {choixOrdi}</span>}
                    <span>{resultatAffichage[resultat]}</span>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        {options.map((option) => {
                            return (
                                <Button key={option} style={{ width: 100, margin: 5 }} onClick={() => jouer(option)}>
                                    {option}
                                </Button>
                            )
                        })}
                    </div>
                </div>
            }

        </div>
    )
}

export default RochePapierCiseaux;