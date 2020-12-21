import React from 'react';
import './App.css';
import Routes from "./Routes";
// import './assets/scripts/fetch/api';
import {Provider} from 'react-redux';
import {store} from './store/store';

function App() {
  return (
    <Provider store={store}>
     <Routes />
    </Provider>
  );
}

export default App;
