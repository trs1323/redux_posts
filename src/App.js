import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'

import Posts from './componets/Posts'
import Postform from './componets/Postform'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Postform />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
