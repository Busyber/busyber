import React, { Suspense, useRef, useState } from 'react'
import Loading from './libs/components/loading'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom';
import LandingScreen from 'components/LandingScreen.js'
import getApolloClient from 'libs/auth-react/getApolloClient'
import { ApolloProvider } from '@apollo/client';


export default function App() {

  const clientRef = useRef(getApolloClient({
    port: 4000, productionServerUrl: ""
  }))


  return (
    <ApolloProvider client={clientRef.current} >
      <LandingScreen />
    </ApolloProvider>
  )
}

