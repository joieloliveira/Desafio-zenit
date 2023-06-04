import React from 'react';
import './App.css';

import { MainProvider } from './Context';
import { Provider } from 'react-redux';
import store from './redux';
import Routes from './routes/MainRouter'

function App() {
  return (
    <>
      <Provider store={store}>
        <MainProvider>
          <Routes />
        </MainProvider>
      </Provider>
    </>
  );
}

export default App;
