import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from 'libs/components/button'
import ErrorAlert from 'libs/components/alert/error'
import Alert from 'libs/components/alert'
import Form from 'libs/components/form'
import passwordValidator from 'password-validator'
import Text from 'libs/components/text'
import useAuth from 'libs/auth-react/hooks/useAuth'


/**
 * 
 * add the following paths to react router
 * /register
 * /forgot-password
 */
function Register({ logo }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [invalidPassword, setInvalidPassword] = useState()

    const { isLoading: loading, error: showError, alreadyExist: showAlreadyExists, register } = useAuth()

    const schema = new passwordValidator()

    const onSubmit = () => {
        setInvalidPassword(null)

        schema.is().min(5)

        if (schema.validate(password)) {
            register({ email, password })
        } else {
            setInvalidPassword("Password is too short")
        }
    }

    return (

        <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div class="sm:mx-auto sm:w-full sm:max-w-md">

                <div className='w-full flex justify-center'>
                    {logo}
                </div>

                <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Create new Account
                </h2>
            </div>

            <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <Form
                        onSubmit={onSubmit}
                        tailwind="space-y-6"
                    >
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <div class="mt-1">
                                <input
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    id="email" name="email" type="email" autocomplete="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                        </div>

                        <div>
                            <label for="password" class="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div class="mt-1">
                                <input
                                    value={password}
                                    onChange={e => {
                                        setInvalidPassword(null)
                                        setPassword(e.target.value)
                                    }}
                                    id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                        </div>


                        {
                            invalidPassword &&
                            <Text
                                color
                                tailwind={`mt-2 ${'text-red-400'} `}
                                type='text-small'>{invalidPassword}</Text>
                        }

                        <div>
                            <Button
                                typeSubmit
                                loading={loading}
                                tailwind="w-full">
                                Sign up
                            </Button>
                        </div>
                    </Form>

                    <ErrorAlert
                        tailwind='mt-4'
                        isShown={showError}
                    />

                    <Alert
                        tailwind='mt-4'
                        content={'The Account Already Exists'}
                        isShown={showAlreadyExists} />
                </div>
            </div>
        </div>

    )
}

Register.propTypes = {

}

export default Register


