import React from 'react'
import '../App.css';

export function AppHeader({onLogin, onRegister}={onLogin:()=>{}, onRegister:()=>{}}) {
    return (
        <div className={`navbar navbar-expand-lg navbar-light bg-light`}>
            <h4 className={`float-left`} style={{fontFamily:'monospace'}}>{`Jovial {video_system}`}</h4>
            <div className={`float-right`} style={{float:'right'}}>
                <button className={`btn`} onClick={onLogin}>Login</button>
                <button className={`btn`} onClick={onRegister}>Register</button>
            </div>
        </div>
    )
}