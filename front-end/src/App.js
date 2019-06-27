import React from 'react';
import logo from './logo.svg';
import './App.scss';
import AppLayout from './containers/Layout/Layout';
import {store} from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <AppLayout />
    </Provider>
  );
}

export default App;
