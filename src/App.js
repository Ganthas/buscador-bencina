import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RegionsContextProvider from './contexts/RegionsContext';
import CommunesContextProvider from './contexts/CommunesContext';
import GasStationsContextProvider from './contexts/GasStationsContext';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';
import Search from './components/Common/Search';
import NotFound from './components/NotFound';
import './assets/css/styles.css';

const App = () => (
  <BrowserRouter>
    <Header />

    <Switch>
      <Route exact path='/'>
        <RegionsContextProvider>
          <CommunesContextProvider>
            <GasStationsContextProvider>
              <Search />
            </GasStationsContextProvider>
          </CommunesContextProvider>
        </RegionsContextProvider>
      </Route>
      <Route path='/gasstation/:gasstation_id'>
        <div>Holiwi</div>
      </Route>
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </BrowserRouter>
);

App.displayName = 'App';

export default App;