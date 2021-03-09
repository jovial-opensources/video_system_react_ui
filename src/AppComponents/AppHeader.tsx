import React from 'react'
import '../App.css';

export function AppHeader(
        {onLogin, onRegister, onDashboard} : {onLogin?: ()=>any, onRegister?: ()=>any, onDashboard?: ()=>any}
    ) {
    const btn_components = []

    if(typeof onLogin === 'function')
        btn_components.push(
            <button className={`btn ml-1 bg-primary text-white`} onClick={onLogin} key={'key'}>Login</button>
        )
    if(typeof onRegister === 'function')
        btn_components.push(
            <button className={`btn ml-1 bg-dark text-white`} onClick={onRegister} key={'register'}>Register</button>
        )
    if(typeof onDashboard === 'function')
        btn_components.push(
            <button className={`btn ml-1 bg-dark text-white`} onClick={onDashboard} key={'dashboard'}>Dashboard</button>
        )

    return (
        <div className={`navbar navbar-light bg-light`}>
            <a className={`float-left`} style={{
                fontFamily:'monospace', fontStyle: 'monospace', fontSize:'20px'
            }}>{`Jovial {video_system}`}</a>
            <span  className={`btn float-lg-right`}>
                { btn_components }
            </span>
        </div>
    )
}