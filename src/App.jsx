import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (

        <div className="grid-container">
            <div className="header">
                <h1>Guohao Qin</h1>
            </div>

            <div className="middle">
                <div className="box"></div>
            </div>

            <div className="left"></div>
            <div className="right"></div>
            <div className="footer"></div>
        </div>
    )
}

export default App
