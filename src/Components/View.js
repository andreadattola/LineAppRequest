import React, { useState, useEffect } from 'react'
import view from '../Components/css/view.css'
import Classifica from './Classifica';

export default function View({ dati, Aggiorna, reset, add, classTempo, datiUltimoUtente }) {

    const [name, setName] = useState('')
    const [checked, setCheck] = useState(false);
    const [tempo, setTimer] = useState(0)
    const [interval, setInt] = useState();
    const control = () => {
        setCheck(!checked);
        Aggiorna()
    }
    const selectUser = (e) => {
        setName(e.target.value)
    }
    const submit = (e) => {
        e.preventDefault();
    }
    const aggiungiUser = () => {
       name.length>1?add(name):alert('il nome non è valido retry')
        setName('')
    }
    var secondi = 0
    const timer = () => {
        let intervalId = setInterval(() => {
            secondi++
            setTimer(x => secondi)
        }, 1000);
        setInt(intervalId)
    }
    const stopTimer = () => {
        clearInterval(interval)
        classTempo(tempo);
        setTimer(0)

    }
    //controllo per dark-mode
    checked && document.querySelector("body").classList.add('dark-mode')
    !checked && document.querySelector("body").classList.remove('dark-mode')

    return (
        <div className="row">
            <div className="col-8 offset-2">
                <p className="h3">Andrea Dattola</p>
                <div className={checked == true ? "dark-mode jumbotron jumbotron-fluid vh-100 shadow" :
                    'jumbotron jumbotron-fluid vh-100 shadow'}>
                    <div class="container">
                        <h1 class="display-4">
                            LineApp request
                            </h1>
                        <p class="lead">
                            <ul>
                           <li> <strong>Request 1</strong> - The application will consists on a single page with a light switcher. Such that the user will be able to
enable/disable a dark mode. <span className="btn-success">DONE</span></li>
<li><strong>Request 2</strong> - Through a json interface the user can see and save some statistics. E.g.: how many times the
switcher has been used, and what was the last status of the switch (is the light on or off?). Get
creative and add one more metric.  <span className="btn-success">DONE</span></li></ul></p>
                        <p className="h5 d-inline mr-2  ">
                            {!checked ? 'DarkMode' : 'DayMode'}
                        </p>
                        <label className="switch mt-0">
                            <input type="checkbox"
                                checked={checked}
                                onChange={control} />
                            <span className="slider round"></span>
                        </label>
                        {/* forms */}
                        <form onSubmit={submit}>
                            <div class="form-group">

                                <input type="text" id='name'
                                    className=" form-control-sm" placeholder='type here name'
                                    onChange={selectUser}
                                    value={name}>
                                </input>
                                <input className='btn btn-success' onClick={aggiungiUser} type='submit' value='invio'>

                                </input>
                            </div>
                        </form>
                    </div>
                    <hr></hr>
                    <table
                        className={checked == true ? "table table-dark" : "table"}>
                        <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">User</th>
                                <th scope="col">Last switcher state</th>
                                <th scope="col">Switched times</th>
                                <th scope="col">{tempo===0?<button className="btn btn-primary"
                                    onClick={timer}>Start timer</button> : <button onClick={stopTimer} className="btn btn-outline-primary">Azzera e salva</button> }</th>
                                <th scope="col"><button className="btn btn-danger"
                                    onClick={reset}>  Reset stats</button></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">{dati.id}</th>
                                <td>{dati.user}</td>
                                <td>{dati.view} </td>
                                <td>{dati.click}</td>
                                <td>{tempo} secondi</td>

                            </tr>

                        </tbody>
                    </table>
                    <Classifica datiUltimoUtente={datiUltimoUtente}></Classifica>
                </div>
            </div>
        </div>
    )
}
