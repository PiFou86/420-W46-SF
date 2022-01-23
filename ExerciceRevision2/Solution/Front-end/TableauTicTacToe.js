import React from 'react';
import Table from 'react-bootstrap/Table'

const Cellule = (props) => {
    const contenu = ["", "X", "O"];
    return (
        <td style={{ width: 66, height: 66, padding: 0 }}>
            <button onClick={props.etat == 0 && props.statut == 'enCours' ? props.onClick : null} style={{ border: 'none', padding: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                <span style={{ verticalAlign: 'middle' }}>{contenu[props.etat]}</span>
            </button>
        </td>
    );
}

function TableauTicTacToe(props) {
    console.log('Table', props.jeu)
    return (
        <Table bordered style={{ width: 200, height: 200, margin: 0 }}>
            <tbody>
                <tr>
                    <Cellule etat={props.jeu[0]} statut={props.statut} onClick={() => props.onClick(0)} />
                    <Cellule etat={props.jeu[1]} statut={props.statut} onClick={() => props.onClick(1)} />
                    <Cellule etat={props.jeu[2]} statut={props.statut} onClick={() => props.onClick(2)} />
                </tr>
                <tr>
                    <Cellule etat={props.jeu[3]} statut={props.statut} onClick={() => props.onClick(3)} />
                    <Cellule etat={props.jeu[4]} statut={props.statut} onClick={() => props.onClick(4)} />
                    <Cellule etat={props.jeu[5]} statut={props.statut} onClick={() => props.onClick(5)} />
                </tr>
                <tr>
                    <Cellule etat={props.jeu[6]} statut={props.statut} onClick={() => props.onClick(6)} />
                    <Cellule etat={props.jeu[7]} statut={props.statut} onClick={() => props.onClick(7)} />
                    <Cellule etat={props.jeu[8]} statut={props.statut} onClick={() => props.onClick(8)} />
                </tr>
            </tbody>
        </Table>
    );
}

export default TableauTicTacToe;