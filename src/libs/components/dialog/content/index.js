import React, { useRef, useEffect, useState } from 'react';
import { useFadeAnimChild } from 'libs/hooks/useFadeAnim'
import styled from 'styled-components';
import Simple from './simple';
import useClickOutside from 'libs/hooks/useClickOutside';
import Action from './action';
import IconButton from '../../iconbutton';
import 'libs/components/theme/fadeAnim.css';
import Overlay from 'libs/components/overlay';
import Absolute from './absolute'
import AbsoluteBasic from './absolute-basic'
import { XIcon } from '@heroicons/react/solid';


const Wrapper = styled.div`
${({ fadeOut, theme }) => fadeOut ? theme.fadeOutSize : theme.fadeInSize};
`

const Content = (props) => {
    const { variant, stopRender, isShown, shouldCloseOnOverlayClick, children,
        onCloseComplete, showDismiss, tailwind, itemsCenter, id, fullWidth, fullHeight, dismissVariant } = props;

    const { close: closeDialog, fadeOut, onAnimationEnd } = useFadeAnimChild(isShown, stopRender, onCloseComplete)

    const variantType = () => {

        const simple = <Simple
            {...props}
            grayFooter={variant === 'simple-gray'}
            closeDialog={closeDialog}
        />

        const action = <Action
            {...props}
            closeDialog={closeDialog}
            doubleAction={variant === 'double-action'}
        />

        switch (variant) {
            case 'simple-gray':
                return simple;
            case 'action':
                return action;
            case 'double-action':
                return action;
            default:
                return simple;

        }
    }

    const dialogRef = useRef()

    useClickOutside([dialogRef], () => {
        if (shouldCloseOnOverlayClick) {
            closeDialog();
        }
    }, variant !== 'absolute' &&  variant !== 'absolute-basic' )


    return (



        (variant === 'absolute' || variant === 'absolute-basic') ?
            (variant === 'absolute' ?
                <div
                    data-testid={id}
                    className='z-50 fixed top-0 bottom-0 left-0 right-0 '>

                    <Overlay
                        absolute
                        tailwind='fixed top-0 bottom-0 left-0 right-0'
                        fadeOut={fadeOut} />

                    <Absolute
                        {...props}
                        onAnimationEnd={onAnimationEnd}
                        fadeOut={fadeOut} />
                </div>
                :

                <AbsoluteBasic
                    {...props}
                    tailwind={`z-50 ${tailwind}`}
                    onAnimationEnd={onAnimationEnd}
                    fadeOut={fadeOut} />


            )
            :

            <div
                data-testid={id}
                className='z-50 fixed top-0 bottom-0 left-0 right-0 '>

                <Overlay
                    absolute
                    tailwind='fixed top-0 bottom-0 left-0 right-0'
                    fadeOut={fadeOut} />

                <Wrapper
                    className={`z-50 absolute flex ${!itemsCenter && 'items-center'} justify-center
                     left-0 right-0 top-0 bottom-0`}
                    fadeOut={fadeOut}
                    onAnimationEnd={onAnimationEnd}>
                    <div className={`${fullWidth && 'w-full'} ${fullHeight && 'h-full'}`}>
                        <div
                            ref={dialogRef}
                            className={`shadow-md  ${(!fullHeight || !fullHeight) && 'rounded-lg'} ${fullWidth ? 'w-full' : 'max-w-lg'} 
                            ${fullHeight && 'h-full'} bg-white transform shadow-xl  overflow-auto`}
                        >
                            {showDismiss &&
                                <div className={`z-50 justify-end absolute w-full flex p-4`}>
                                    {dismissVariant === 'round' ?


                                        <IconButton
                                            id='dialog-cancel'
                                            tailwind='p-1 h-8 w-8 hover:bg-gray-100 text-gray-500'
                                            hasBackground={false}
                                            src={<XIcon />}
                                            onClick={() => closeDialog()}
                                            color
                                            hover
                                            size
                                        />
                                        :
                                        <div
                                            onClick={() => closeDialog()}
                                            data-testid='dialog-cancel'
                                            className=' transition duration-200 p-2 rounded bg-gray-900 hover:bg-gray-800 cursor-pointer opacity-50 rounded-lg'>
                                            <IconButton
                                                tailwind='p-1 h-8 w-8 text-gray-100'
                                                hasBackground={false}
                                                src={<XIcon />}
                                                color
                                                hover
                                                size
                                            />
                                        </div>
                                    }
                                </div>

                            }
                            {variant === 'normal' ?
                                children
                                :
                                <div>
                                    {
                                        variantType()
                                    }
                                </div>
                            }

                        </div>
                    </div>
                </Wrapper>

            </div>

    );
};

export default Content;
