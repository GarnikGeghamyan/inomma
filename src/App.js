import React from 'react';
import { Router } from './router';
import { Provider } from 'react-redux'
import { configureStore } from './store/configureStore';
import { preloadedState } from './store/preloadedState';

import 'firebase/database';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import initConfigs from "./firebaseInit";

import './App.css';

const store = configureStore(preloadedState);
const rrfProps = initConfigs(store);

const App = () => {
  return (
      <Provider store={store}>
          <ReactReduxFirebaseProvider {...rrfProps}>
              <Router />
          </ReactReduxFirebaseProvider>
      </Provider>
  )
}

export default App;
