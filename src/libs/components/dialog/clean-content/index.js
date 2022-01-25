import React from 'react'
import PropTypes from 'prop-types'
import { useFadeAnimChild } from 'libs/hooks/useFadeAnim'
import styled from 'styled-components';


const Wrapper = styled.div`
${({ fadeOut, theme }) => fadeOut ? theme.fadeOutSize : theme.fadeInSize};
`

const Overlay = styled.div`
${({ fadeOut, theme }) => fadeOut ? theme.fadeOut50 : theme.fadeIn50};
`

function CleanContent({ stopRender, isShown, onCloseComplete, children }) {

    const { close: closeDialog, fadeOut, onAnimationEnd } = useFadeAnimChild(isShown, stopRender, onCloseComplete)

    return (

        <>
        

            <Wrapper
                fadeOut={fadeOut}
                onAnimationEnd={onAnimationEnd}
                className="fixed z-50 inset-0  left-0 right-0 bottom-0 top-0 overflow-y-auto" >
                <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">

    <Overlay 
            fadeOut={fadeOut}
            class="fixed z-30 transition-opacity left-0 right-0 bottom-0 top-0  " aria-hidden="true">
                <div class="absolute inset-0 bg-gray-500 opacity-75 w-full h-full left-0 right-0 bottom-0 top-0 "></div>
            </Overlay>

                    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle " role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                        {children}

                  

                    </div>
                </div>
            </Wrapper>

        </>

    )
}

CleanContent.propTypes = {

}

export default CleanContent


