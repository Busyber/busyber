import React from 'react'
import PropTypes from 'prop-types'
import Button from 'libs/components/button'
import ErrorAlert from 'libs/components/alert/error'
import Alert from 'libs/components/alert'
import Form from 'libs/components/form'
import Text from 'libs/components/text'

function LoginContent({ logo, onSubmit, email, setEmail, password, setPassword, setInvalidPassword, invalidPassword, loading,
    showError, showWrongPassword }) {
    return (

        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">

                <div className='w-full flex justify-center'>
                    {logo}
                </div>

                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Sign in to your account
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600 max-w">
                    Or
                    <a href="/register" className="mx-2 font-medium text-indigo-600 hover:text-indigo-500">
                        Create a new Account
                    </a>
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <Form
                        onSubmit={onSubmit}
                        tailwind="space-y-6"
                    >
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    data-testid='email-input'
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    id="email" name="email" type="email" autoComplete="email" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    data-testid='password-input'
                                    value={password}
                                    onChange={e => {
                                        setInvalidPassword(null)
                                        setPassword(e.target.value)
                                    }}
                                    id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                        </div>

                        {
                            invalidPassword &&
                            <Text
                                testid='invalid-password'
                                color
                                tailwind={`mt-2 ${'text-red-400'} `}
                                type='text-small'>{invalidPassword}</Text>
                        }


                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                            </div>

                            <div className="text-sm">
                                <a href="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <Button
                                testid='login-button'
                                loadingTestid='loading'
                                typeSubmit
                                loading={loading}
                                tailwind="w-full">
                                Sign in
                            </Button>
                        </div>
                    </Form>

                    <ErrorAlert
                        testid='error'
                        tailwind='mt-4'
                        isShown={showError}
                    />

                    <Alert
                        testid='wrong-password'
                        tailwind='mt-4'
                        content={'Username and password do not match'}
                        isShown={showWrongPassword} />

                </div>
            </div>
        </div>

    )
}

LoginContent.propTypes = {

}

export default LoginContent


