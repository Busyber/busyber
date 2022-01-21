import { useState, useEffect } from 'react'
import { getUser, isLoggedIn } from '../utils/authUtil'
import { HTTP_URL } from '../utils/url-util'
import useLogin from './useLogin'
import useLogout from './useLogout/index.js'
import useRegister from './useRegister'
import useForgotPassword from './useForgotPassword'

/**
 * use the use Auth method for everything
 */
const useAuth = (props = {}) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState()
    const [alreadyExist, setAlreadyExist] = useState(false)
    const [wrongPassword, setWrongPassword] = useState(false)
    const [nonExist, setNonExist] = useState(false)
    const [forgotPasswordSent, setForgotPasswordSent] = useState(false)


    const [user, setUser] = useState(getUser())

    const [requestComplete, setRequestComplete] = useState(false)


    useEffect(() => {
        setIsLoading(false)

        if (requestComplete && isAuthenticated) {
            setRequestComplete(false)
            //navigate back to home
            window.location.href = HTTP_URL
        }
    }, [requestComplete, isAuthenticated])

    const { register: registerFunc, loading: registerLoading } = useRegister({
        cookieNames: props.cookieNames,
        onRegister: () => {
            checkIsAuthenticated()
            setRequestComplete(true)
        },
        onError: (error) => {
            setError(error)
        },
        onAlreadyExists: () => {
            setAlreadyExist(true)
        }
    })

    const { login: loginFunc, loading: loginLoading } = useLogin({
        cookieNames: props.cookieNames,
        onLogin: () => {
            checkIsAuthenticated()
            setRequestComplete(true)
        },
        onError: (error) => {
            setError(error)
        },
        onWrongPassword: () => {
            setWrongPassword(true)
        }
    })

    const { resetPassword: resetPasswordFunc, loading: forgotPasswordLoading } = useForgotPassword({
        queryResetPassword: props ? props.queryResetPassword : null,
        onForgotPassword: () => {
            setForgotPasswordSent(true)
        },
        onError: (error) => {
            setError(error)
        },
        onNotExist: () => {
            setNonExist(true)
        }
    })

    const { logout, loading: logoutLoading, error: logoutError } = useLogout({ cookieNames: props.cookieNames })

    /**
     * 
     */
    const checkIsAuthenticated = () => {
        setUser(getUser(props.cookieNames))
        setIsAuthenticated(isLoggedIn(props.cookieNames))

    }

    useEffect(() => {
        checkIsAuthenticated()
    }, [])

    useEffect(() => {
        if (registerLoading || logoutLoading || loginLoading || forgotPasswordLoading) {
            setIsLoading(true)
        } else {
            setIsLoading(false)
        }
    }, [registerLoading, logoutLoading, loginLoading, forgotPasswordLoading])


    useEffect(() => {
        if (logoutError) {
            setError(true)
        } else {
            setError(false)
        }
    }, [logoutError])


    const register = ({ email, password }) => {
        setError(null)
        setAlreadyExist(null)
        registerFunc({ email, password })
    }

    const forgotPassword = (email) => {
        setForgotPasswordSent(false)
        setNonExist(false)
        resetPasswordFunc(email)
    }

    const login = ({ email, password }) => {
        setError(null)
        setWrongPassword(null)
        loginFunc({ email, password })
    }

    return {
        login,
        register,
        logout,
        isAuthenticated,
        isLoading,
        user,
        error,
        //the user Already exists
        alreadyExist,
        wrongPassword,
        //the user doesnt exists
        nonExist,
        forgotPasswordSent,
        forgotPassword
    }

}

export default useAuth
