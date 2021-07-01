import React from 'react';
import { NavigationProvider } from './navigate';
import {store,persistor} from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'


export default function App() {
  return (
    <Provider store={store}>
      <PersistGate 
        persistor={persistor}>
            <NavigationProvider />
        </PersistGate>
    </Provider>
  );
}

