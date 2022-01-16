import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client'
import { getToken } from './utils/authUtil';


const getApolloClient = ({ port, productionServerUrl, cookieNames }) => {
    const httpLink = createUploadLink({
        uri: (process.env.NODE_ENV === 'development') ? `http://localhost:${port}/graphql` : productionServerUrl,

    })

    const authLink = new ApolloLink((operation, forward) => {
        const token = getToken(cookieNames);
        operation.setContext({
            headers: {
                "Access-Control-Allow-Origin": '*',
                authorization: token
            }
        })
        return forward(operation)
    })



    const apolloClient = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache({
            dataIdFromObject: o => (o._id ? `${o.__typename}:${o._id}` : null),
        })
    })

    return apolloClient
}

export default getApolloClient