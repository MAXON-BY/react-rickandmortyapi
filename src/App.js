import React from 'react';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import HeroSite from './components/HeroSite';
import HeroPage from './pages/HeroPage';
import DocsPage from './pages/DocsPage';
import AboutPage from './pages/AboutPage';
import ContactsPage from './pages/ContactsPage';
import { Route, Switch } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSite />

      <div className="main">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/hero/:id" component={HeroPage} />
          <Route path="/docs" component={DocsPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contacts" component={ContactsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
