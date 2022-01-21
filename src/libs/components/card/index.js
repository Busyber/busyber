import React from 'react';
import PropTypes from 'prop-types';
import Text from 'libs/components/text'

const Card = ({ testid, children, onClick, className, tailwind, rounded, onAnimationEnd, shadow, header, mobileFlat }) => {
    let styles

    if (mobileFlat) {
        styles = `md:border md:border-gray-200 md:bg-white ${!shadow && 'md:shadow-md'} ${!rounded && 'md:rounded-lg'}`
    } else {
        styles = `border border-gray-200 bg-white ${!shadow && 'shadow-md'} ${!rounded && 'rounded-lg'}`
    }

    return (
        <div
            data-testid={testid}
            onAnimationEnd={onAnimationEnd}
            className={`${styles} ${tailwind} ${className}`}
            onClick={onClick}>
            {header &&
                <div className='p-4 border-b border-gray-200'>
                    <Text
                        color
                        tailwind='font-bold text-gray-800'>{header.heading}</Text>
                    <Text
                        size
                        tailwind=' text-xs'
                        type='text-small'>{header.subHeading}</Text>
                </div>
            }

            {children}
        </div>
    );
};

const tailwindProps = {
    shadow: false,
    rounded: false,
}

Card.defaultProps = {
    ...tailwindProps,
    //whether to be flat in mobile view
    mobileFlat: false
}

Card.propTypes = {
    onClick: PropTypes.func,
    header: PropTypes.shape({
        heading: PropTypes.string,
        subHeading: PropTypes.string,
    }),
};

export default Card;
