import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Spinner from 'react-spinkit'
import Wrapper from 'libs/components/wrapper'


const Icon = ({ onClick, hasBackground, src, className, tailwind, round, color, size, png, alt,
    rounded, testid, loading, loadingTestid, }) => {

    return (
        <>
            {loading ?
                <Wrapper testid={loadingTestid} tailwind={tailwind}>

                    <Spinner name="pulse" color="steelblue" />

                </Wrapper>
                :
                <div
                    data-testid={testid}
                    onClick={(e) => {
                        if (onClick) {
                            e.stopPropagation()
                            onClick(e)
                        }
                    }}
                    className={`flex-shrink-0 ${png && 'flex justify-center items-center'} ${color} ${!color && 'text-gray-800'} 
            ${!size && 'w-10 h-10 p-2'} ${hasBackground && !png && 'bg-gray-200'} 
            ${!rounded && (round ? 'rounded-full' : 'rounded-lg')} ${tailwind} ${className}`}>
                    {png ?
                        <img
                            tailwind='w-full h-full'
                            src={src}
                            alt={alt} />
                        :

                        src
                    }
                </div>
            }
        </>
    );
};

const tailwindProps = {
    rounded: false,
    color: false,
    size: false,
}

export const defaultProps = {
    ...tailwindProps,
    round: true,
    hasBackground: true,
    png: false,
    alt: '',
    loading: false,
    loadingId: 'button-loading'
}

export const propTypes = {
    /** icon should be an svg ReactComponent, pass it as i.e <CheckedSVG/> */
    src: PropTypes.object,
};

Icon.defaultProps = defaultProps

Icon.propTypes = propTypes

export default Icon;
