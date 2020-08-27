import React from 'react';
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import HeroSite from "./components/HeroSite";
import HeroPage from "./pages/HeroPage";
import DocsPage from "./pages/DocsPage";
import AboutPage from "./pages/AboutPage";
import ContactsPage from "./pages/ContactsPage";

function App() {
    return (
        <div className="App">
            <Header/>
            <HeroSite/>

            <div className="main">
                <HomePage/>
                <HeroPage/>
                <DocsPage/>
                <AboutPage/>
                <ContactsPage/>
            </div>

        </div>
    );
}

export default App;
