import React, {createRef, useState} from 'react';
import {AppHeader} from './AppComponents/AppHeader'
import {MainComponentNames, Main} from './AppComponents/Main'

function appUrlParser(url:string): string{
    return (
        MainComponentNames.find(name=>{
            return RegExp(name).exec(url)
        }) || ''
    )
}

function App() {

    // eslint-disable-next-line no-restricted-globals
    const initState: string = appUrlParser(location.pathname)

    const [value, setState] = useState<string>(initState)

    const onLogin = ()=>{
        const url: string = 'login'
        setState(url)
    }
    const onRegister = ()=>{
        const url: string = 'register'
        setState(url)
    }

    const onDashboard = ()=>{
        const url: string = 'dashboard'
        setState(url)
    }

    const component: string = appUrlParser(value)
    const main_ref = createRef<HTMLDivElement>()
    const root_ref = createRef<HTMLDivElement>()
    // eslint-disable-next-line no-restricted-globals
    window.history.pushState(component, component, component)

  return (
    <div ref={root_ref}>
      <AppHeader onLogin={onLogin} onRegister={onRegister} onDashboard={onDashboard}/>
      <Main component={component} main_ref={main_ref}/>
    </div>
  );
}

export default App;
