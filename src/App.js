import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RegionsContextProvider from './contexts/RegionsContext';
import Header from './components/Common/Header';
import Search from './components/Common/Search';
import NotFound from './components/NotFound';
import './assets/css/styles.css';

const App = () => (
  <BrowserRouter>
    <Header />
    <RegionsContextProvider>
      <Search />
    </RegionsContextProvider>
    {/* <Switch>
      <Route exact path='/'>
        <SongsContextProvider>
          <Songs />
        </SongsContextProvider>
      </Route>
      <Route component={NotFound} />
    </Switch> */}
  </BrowserRouter>
);

App.displayName = 'App';

export default App;