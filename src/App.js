import React from 'react';
import HomePage from "./pages/HomePage";
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <Header/>

            <div className="main">
               <HomePage/>
            </div>

        </div>
    );
}

export default App;
