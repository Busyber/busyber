import React, { Suspense, useState } from 'react'
import PropTypes from 'prop-types'
import Loading from 'libs/components/loading'
import { Route, Switch } from 'react-router'
import AuthProvider from 'libs/auth-react/components/auth-provider'
const Login = React.lazy(() => import('../login'))
const Register = React.lazy(() => import('../register'))
const ForgotPassword = React.lazy(() => import('../forgot-password'))
const ChangePassword = React.lazy(() => import('../change-password'))

function Controller({ port, productionServerUrl, logo,dashboardComponent }) {
    return (

        <AuthProvider
            port={port}
            productionServerUrl={productionServerUrl}
        >
            <Route path='/login'>

                <Suspense fallback={<Loading screen />} >
                    <Login logo={logo} />
                </Suspense>
            </Route>
            <Route path='/register'>
                <Suspense fallback={<Loading screen />} >
                    <Register logo={logo} />

                </Suspense>
            </Route>
            <Route path='/forgot-password'>
                <Suspense fallback={<Loading screen />} >
                    <ForgotPassword logo={logo} />
                </Suspense>
            </Route>
            <Route path='/reset'>
                <Suspense fallback={<Loading screen />} >
                    <ChangePassword logo={logo} />
                </Suspense>
            </Route>

            < Route path='/'>
                <Suspense fallback={<Loading screen />} >
                    {dashboardComponent}
                </Suspense>
            </Route>

        </AuthProvider>
    )
}

Controller.propTypes = {

}

export default Controller


