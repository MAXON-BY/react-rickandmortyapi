import React from 'react';
import logo from './assets/img/logo.svg'

function App() {
    return (
        <div className="App">
            <header>
                <div className="header-logo">
                    <a href="/">
                        <img src={logo} alt="Rick and Morty"/>
                    </a>
                </div>
            </header>

            <h1>Hello Rick and Morty</h1>
        </div>
    );
}

export default App;
