import React from 'react';
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import HeroSite from "./components/HeroSite";
import HeroPage from "./pages/HeroPage";

function App() {
    return (
        <div className="App">
            <Header/>
            <HeroSite/>

            <div className="main">
                {/*<HomePage/>*/}
                <HeroPage/>
            </div>

        </div>
    );
}

export default App;
