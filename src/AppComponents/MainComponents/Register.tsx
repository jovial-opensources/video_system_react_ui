import React, {createRef} from 'react'
import '../../App.css';

export function Register({}:{}) {

    const loginFormRef = createRef<HTMLDivElement>()

    const loginAction = ()=>{
        
    }
    

    return (
        <div className={`container card`} style={{
            maxWidth: '400px', marginTop: '25px'
        }} id="login/form" ref={loginFormRef}>
            <br/>
            <h3>
                Login
                <button className="btn text-white bg-info float-right" id="login/submit1">Submit</button>
            </h3>
            <code id="login/err_msg"></code>
            <div className="form-group">
              <label>Username</label>
              <input className="form-control" id="login/username"/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input className="form-control" id="login/password" type={'password'}/>
            </div>
            <h3>
                <button className="btn text-white bg-info float-right" id="login/submit2">Submit</button>
            </h3>
        </div>
    )
}