import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import getApolloClient from 'libs/auth-react/getApolloClient'
import { ApolloProvider } from '@apollo/client'



function AuthProvider({ children, port, productionServerUrl ,cookieNames}) {

    const clientRef = useRef(getApolloClient({
        port, productionServerUrl,cookieNames
    }))


    return (
        <ApolloProvider client={clientRef.current} >
            {children}
        </ApolloProvider>


    )
}

AuthProvider.propTypes = {

}

export default AuthProvider


















