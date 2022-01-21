import React, { useState } from 'react';
import FieldInput from 'libs/components/fieldinput'
import Form from 'libs/components/form'
import Button from 'libs/components/button'
import GrayDiv from 'libs/components/gray-div'
import Card from 'libs/components/card'
import Container from 'libs/components/container'
import Alert from 'libs/components/alert'
import SuccessAlert from 'libs/components/alert/success';
import ErrorAlert from 'libs/components/alert/error';
import useAuth from 'libs/auth-react/hooks/useAuth';



const ForgotPassword = ({ logo, queryResetPassword }) => {
    const [email, setEmail] = useState('')

    const {
        isLoading: loading,
        error,
        nonExist,
        forgotPasswordSent: success,
        forgotPassword
    } = useAuth({ queryResetPassword })

    const handleFormSubmit = () => {
        forgotPassword(email)
    }

    return (
        <div data-testid='forgot-password-page' className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">

                <div className='w-full flex justify-center'>
                    {logo}
                </div>


            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-md mt-8 ">
                {success ?

                    <SuccessAlert
                        fullScreen
                        id='success'
                        isShown={true}
                        showDismiss={false}
                        content={"Sent reset email"}
                    />
                    :
                    <>

                        <Card tailwind='p-8 w-full mt-2'>
                            <Form
                                id='form'
                                onSubmit={handleFormSubmit}>

                                <div className='py-2 w-full'>
                                    <FieldInput
                                        id='email'
                                        tailwind=''
                                        onChange={(value) => setEmail(value)}
                                        label="Email address"
                                        type='email'
                                    />
                                </div>

                                <Button

                                    id='submit'
                                    typeSubmit
                                    loading={loading}
                                    tailwind='mt-4 w-full'
                                >
                                    Reset Password
                                </Button>
                            </Form>

                            <ErrorAlert
                                tailwind='mt-4'
                                isShown={error}
                                id='error'
                            />

                            <Alert
                                tailwind='mt-4'
                                isShown={nonExist}
                                variant='warning'
                                id='non-exist'
                                content={'The account does not exist.'}
                            />
                        </Card>

                    </>
                }
            </div></div>

    );
};

export default ForgotPassword
