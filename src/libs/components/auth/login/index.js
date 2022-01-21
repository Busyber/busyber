import React, { useState } from 'react'

import passwordValidator from 'password-validator'
import useAuth from 'libs/auth-react/hooks/useAuth'
import LoginContent from './content'

const schema = new passwordValidator()


/**
 * 
 */
function Login({ logo }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [invalidPassword, setInvalidPassword] = useState()

    const { login, isLoading: loading, error: showError, wrongPassword: showWrongPassword } = useAuth()


    const onSubmit = () => {
        setInvalidPassword(null)

        schema.is().min(5)

        if (schema.validate(password)) {
            login({ email, password })
        } else {
            setInvalidPassword("Password is too short")
        }
    }



    return (
        <LoginContent
            logo={logo}
            onSubmit={onSubmit}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            setInvalidPassword={setInvalidPassword}
            invalidPassword={invalidPassword}
            loading={loading}
            showError={showError}
            showWrongPassword={showWrongPassword}
        />
    )
}

Login.propTypes = {

}

export default Login


