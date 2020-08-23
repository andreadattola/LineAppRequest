import React from 'react'

export default function Classifica({datiUltimoUtente}) {
    return (
        <div>
        <p className="h5">Controllo Ultimo utente </p>
        <ul>
            <li>User Name : {datiUltimoUtente.user}</li>
            <li>numero di switch : {datiUltimoUtente.click}</li>
            <li>in secondi : {datiUltimoUtente.time}</li>
        </ul>
        </div>
    )
}
