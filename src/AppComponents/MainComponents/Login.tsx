import React, {createRef} from 'react'
import '../../App.css';
import {login} from '../../Actions/UMS/login'

export function Login({}:{}) {

    const btnRefrences = {
        "login/submit1": createRef<HTMLButtonElement>(),
        "login/submit2": createRef<HTMLButtonElement>()
    }

    const inpRefrences = {
        "login/username": createRef<HTMLInputElement>(),
        "login/password": createRef<HTMLInputElement>()
    }

    const outRefrences = {
        "login/err_msg": createRef<HTMLAnchorElement>()
    }

    const loginAction = async ()=>{
        if(btnRefrences['login/submit1'].current)
            btnRefrences['login/submit1'].current.disabled = true
        if(btnRefrences['login/submit2'].current)
            btnRefrences['login/submit2'].current.disabled = true
        
        const username: string = inpRefrences['login/username'].current?.value
            ? inpRefrences['login/username'].current.value: ''
        const password: string = inpRefrences['login/password'].current?.value
            ? inpRefrences['login/password'].current?.value: ''

        try {
            const res = await login(username, password)
            if(res.error) throw  res.error
            if(outRefrences["login/err_msg"].current)
                outRefrences["login/err_msg"].current.innerText = ''
            // eslint-disable-next-line no-restricted-globals
            location.pathname = '/dashboard'
        }catch (e){
            if(outRefrences["login/err_msg"].current)
                outRefrences["login/err_msg"].current.innerText = e
        }

        if(btnRefrences['login/submit1'].current)
            btnRefrences['login/submit1'].current.disabled = false
        if(btnRefrences['login/submit2'].current)
            btnRefrences['login/submit2'].current.disabled = false
    }
    
    return (
        <div className={`container card`} style={{
            maxWidth: '400px', marginTop: '25px'
        }} id="login/form">
            <br/><br/>
            <h3>
                Login
                <button className="btn text-white bg-info float-right" onClick={loginAction} ref={btnRefrences['login/submit1']}>Submit</button>
            </h3>
            <code ref={outRefrences["login/err_msg"]}></code>
            <div className="form-group">
              <label>Username</label>
              <input className="form-control" ref={inpRefrences['login/username']}/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input className="form-control" ref={inpRefrences['login/password']} type={'password'}/>
            </div>
            <h3>
                <button className="btn text-white bg-info float-right" onClick={loginAction} ref={btnRefrences['login/submit2']}>Submit</button>
            </h3>
        </div>
    )
}