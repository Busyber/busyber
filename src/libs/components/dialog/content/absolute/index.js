import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Container = styled.div`
${({ fadeOut, theme }) => fadeOut ? theme.fadeOutSize : theme.fadeInSize};
`

const Absolute = ({ children, fadeOut, onAnimationEnd, tailwind, id }) => {

    return (
        <Container
            data-testid={id}
            onAnimationEnd={onAnimationEnd}
            fadeOut={fadeOut}
            className={`absolute z-50 inset-x-0 p-2 transition transform origin-top-right left-0 right-0 top-0 bottom-0 flex items-center justify-center `}>

            <div className={`rounded-lg shadow-md ${tailwind}`}>
                <div className="rounded-lg bg-white shadow-xs overflow-hidden">

                    {children}

                </div>
            </div>
        </Container>
    );
};

Absolute.propTypes = {

};

export default Absolute;
