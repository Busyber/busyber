import React, { Suspense, useState } from 'react'
import Loading from './libs/components/loading'
import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom';

import logopng from 'images/logo.png';
import Auth from 'libs/components/auth';


const AuthProvider = React.lazy(() => import('libs/auth-react/components/auth-provider'))
const DashboardScreen = React.lazy(() => import('components/DashboardScreen.js'))
const LandingScreen = React.lazy(() => import('components/LandingScreen.js'))


export default function App() {


  return (
    <BrowserRouter>
      <Switch>
        <Route path='/'><Auth 
 authProvider={<AuthProvider 
  port={4000} 
 productionServerUrl={'https://busyber.herokuapp.com/graphql'} 
 />} 
 landingComponent={<LandingScreen />} 
 dashboardComponent={<DashboardScreen />} 
logo={<img 
 src={logopng} 
 alt={'logo'} 
 className={'w-16 h-16  '} 
/>
} 
/> 
 </Route> 


      </Switch>
    </BrowserRouter>
  )
}

