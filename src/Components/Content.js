import React, { useEffect, useState } from 'react'
import View from './View'

export default function Content() {
    const url = 'http://localhost:3004/info'
    const [dati, setDati] = useState([])
    const [datiClassifica, setDatiClassifica]= useState([]);
    const [controlAggiorna, setControlAggiorna] = useState('DayMode')

    //function aggiorna 
    const patchDate = async () => {
        await fetch('http://localhost:3004/info/0', {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'PUT',
            body: JSON.stringify({
                view: controlAggiorna,
                click: dati && dati.click + 1,
                user: dati && dati.user

            })
        })
        getDati();
    }

// function reset 
const resetDate = async () => {
    await fetch('http://localhost:3004/info/0', {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'PUT',
        body: JSON.stringify({
            view: '-',
            click: 0,
            user: "guest"
         

        })
    })
    getDati();
}
// fetch dei dati dal server
    const getDati = async () => {
        let date = await fetch(url).then(res => res.json())
        for (let x in date) {
            setDati(date[x])
        }
        console.log(dati)
    }
//fetch dati classifica dal server 
const getDatiClassifica = async () => {
    let dateClass = await fetch('http://localhost:3004/classified/0').then(res => res.json())
    for (let x in dateClass) {
        console.log(dateClass[x])
        setDatiClassifica(dateClass)
    }
}
// carico i dati dal server al mounting
    useEffect(() => {
        getDati();
        getDatiClassifica();
        console.log('dati ' + dati)
    }, [])
//aggiungo username 
const addUserName = async (str) => {
   
    await fetch('http://localhost:3004/info/0', {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'PUT',
        body: JSON.stringify({
            view : dati&& dati.view,
            click : dati&& dati.click,
            user: str
        })
    })
    getDati();
}

//set classifica 
const timer =async (x) => {
    await fetch('http://localhost:3004/classified/0', {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'PUT',
        body: JSON.stringify({
            click: dati&& dati.click,
            time: x,
            user: dati&& dati.user
        })
    })
    getDatiClassifica();

}

    const aggiornaDati = () => {
        controlAggiorna === 'DayMode' ? setControlAggiorna('DarkMode') : setControlAggiorna('DayMode')
        patchDate()

    }
    return (
        <View add={addUserName} 
        classTempo={timer}
         reset = {resetDate} 
         Aggiorna={aggiornaDati}
          dati={dati}
              datiUltimoUtente={datiClassifica}>
          </View>
    )
}
