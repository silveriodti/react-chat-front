import React from 'react';
import Routes from './Routes'

import { BrowserRouter } from "react-router-dom"


import { Provider } from 'react-redux'
import store from "./store/store"

import GlobalStyle from './shared/style/globalStyle'

import Layout from './shared/style/layout'

function App() {
  return (
    <Provider store={store} >
      <BrowserRouter>
        <GlobalStyle />
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App
