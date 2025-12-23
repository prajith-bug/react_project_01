import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './assets/component/Dashboard'
import Counter from './assets/component/Counter'

function App(){
    const [name,setName] = useState ("maverick")
    const [occ,setOcc] = useState("student")
    function nameChange() {
        setName("LEO")
        setOcc("Developer")
        console.log=(name)
    }
    return(
        <>
    
       <Dashboard name={name} occ={occ} nameChange={nameChange}>
        
       </Dashboard>
       <Counter name={name} occ={occ} nameChange={nameChange} >

        </Counter>
       </>

    )
}

export default App
