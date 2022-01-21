import React, { useState } from 'react';
import Wrapper from 'libs/components/wrapper'
import Form from 'libs/components/form'
import Button from 'libs/components/button'
import FieldInput from 'libs/components/fieldinput'
import ErrorAlert from 'libs/components/alert/error';
import Alert from 'libs/components/alert'
import GrayDiv from 'libs/components/gray-div'
import Container from 'libs/components/container'
import Card from 'libs/components/card'
import passwordValidator from 'password-validator'
import Text from 'libs/components/text'
import Loading from 'libs/components/loading';
import useAuth from 'libs/auth-react/hooks/useAuth';
import useChangePassword from 'libs/auth-react/hooks/useChangePassword';

/**
 * 
 *add to path /reset
 */
const ChangePassword = ({ logo, queryIsPasswordResetValid, queryChangeTokenPassword, onIsPasswordResetValid }) => {

    const {
        changePassword,
        fullScreenError,
        fullScreenLoading,
        loading,
        error,
        success,
        invalid
    } = useChangePassword({ queryIsPasswordResetValid, queryChangeTokenPassword, onIsPasswordResetValid })


    const [invalidPassword, setInvalidPassword] = useState(false)
    const [password, setPassword] = useState('')

    const schema = new passwordValidator()

    const onSubmit = () => {
        setInvalidPassword(null)

        schema.is().min(5)

        if (schema.validate(password)) {
            changePassword(password)
        } else {
            setInvalidPassword("Password is too short")
        }
    }

    return (

        <GrayDiv
            testid='change-password-page'
            tailwind='min-h-screen w-full'>
            <Container
                tailwind='flex flex-col items-center justify-center w-full'
            >
                {fullScreenLoading ?
                    <div className='w-full h-screen'>
                        <Loading />
                    </div>
                    :
                    fullScreenError ?
                        <Wrapper className='w-full h-screen' id='error'>
                            <ErrorAlert
                                isShown={true}
                            />
                        </Wrapper>
                        :
                        invalid ?
                            <Wrapper
                                tailwind='w-full h-screen flex justify-center items-center'
                                id='invalid'>
                                <div className='max-w-sm'>
                                    <Alert
                                        isShown={true}
                                        variant='warning'
                                        content='Invalid link'
                                    />
                                </div>
                            </Wrapper>
                            :
                            success ?
                                <Wrapper
                                    tailwind='w-full h-screen flex justify-center items-center'
                                    id='success'>
                                    <div className='max-w-sm'>
                                        <Alert
                                            variant='success'
                                            tailwind='w-full flex justify-center items-center'
                                            isShown={true}
                                            content='Reset password success'
                                        />
                                    </div>
                                </Wrapper>

                                :
                                <>
                                    <Wrapper
                                        tailwind='w-full'
                                        id='content'>
                                        <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                                            <div class="sm:mx-auto sm:w-full sm:max-w-md">

                                                <div className='w-full flex justify-center'>
                                                    {logo}
                                                </div>


                                            </div>

                                            <div class="sm:mx-auto sm:w-full sm:max-w-md">

                                                <Card tailwind='p-8 w-full mt-2'>

                                                    <Form onSubmit={onSubmit}>

                                                        <FieldInput
                                                            onChange={(value) => setPassword(value)}
                                                            tailwind=''
                                                            id='password'
                                                            label='New Password'
                                                            type='password'
                                                        />

                                                        {
                                                            invalidPassword &&
                                                            <Text
                                                                color
                                                                tailwind={`mt-2 ${'text-red-400'} `}
                                                                type='text-small'>{invalidPassword}</Text>
                                                        }
                                                        <Button
                                                            id='submit'
                                                            typeSubmit
                                                            loading={loading}
                                                            tailwind='mt-4 w-full'
                                                        >Submit</Button>

                                                    </Form>


                                                    <ErrorAlert
                                                        tailwind='mt-4'
                                                        isShown={error}
                                                        id='error'
                                                    />
                                                </Card>
                                            </div>
                                        </div>
                                    </Wrapper>
                                </>
                }
            </Container>
        </GrayDiv>


    );
};

export default ChangePassword;
