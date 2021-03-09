import React, {Ref} from 'react'
import '../App.css';
import {Login} from './MainComponents/Login'

export const MainComponentNames = [
    "login", "register", "dashboard"
]

export function Main({component, main_ref}:{component:string, main_ref: Ref<HTMLDivElement>}) {

    switch (component) {
        case "login": {
            return (
                <main ref={main_ref}>
                    <Login/>
                </main>
            );
        }
        case "register": {
            return (
                <main ref={main_ref}>
                    register
                </main>
            );
        }
        case "dashboard": {
            return (
                <main ref={main_ref}>
                    dashboard
                </main>
            );
        }
        default: {
            return (
                <main ref={main_ref}>
                    dafault
                </main>
            );
        }
    }

}