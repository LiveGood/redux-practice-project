import React from 'react';
import { Provider } from 'react-redux';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';

import store from './redux/store'

import './App.css';
import IceCreamContainer from './components/IceCreamContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake />
        <ItemContainer />

        <CakeContainer />
        <IceCreamContainer />
        <HooksCakeContainer />
        {/* <UserContainer /> */}
      </div>
    </Provider>

  );
}

export default App;
