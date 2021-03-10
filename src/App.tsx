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

    const [value, setState] = useState<string>('login')

    const onLogin = ()=>{
        // eslint-disable-next-line no-restricted-globals
        const url: string = 'login'
        setState(url)
    }
    const onRegister = ()=>{
        // eslint-disable-next-line no-restricted-globals
        const url: string = 'register'
        setState(url)
    }

    const component: string = appUrlParser(value)
    const main_ref = createRef<HTMLDivElement>()
    const root_ref = createRef<HTMLDivElement>()
    // eslint-disable-next-line no-restricted-globals
    window.history.pushState(component, component, component)

  return (
    <div ref={root_ref}>
      <AppHeader onLogin={onLogin} onRegister={onRegister}/>
      <Main component={component} main_ref={main_ref}/>
    </div>
  );
}

export default App;
