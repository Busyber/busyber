import React from 'react';
import PropTypes from 'prop-types';
import Icon, { defaultProps as iconDefaultProps, propTypes as iconPropTypes } from '../icon';

const IconButton = (props) => {
    const { hasBackground, hover,tailwind} = props

    return (
        <Icon
            {...props}
            tailwind={`cursor-pointer 
                ${!hover && ('hover:' + (hasBackground ? 'bg-gray-300' : 'bg-gray-200'))}
                transition duration-200 ${tailwind}`}
        />
    );
};

const tailwindProps = {
    hover: false,
}


IconButton.defaultProps = {
    ...iconDefaultProps,
    ...tailwindProps,
}

IconButton.propTypes = {
    ...iconPropTypes,
    onClick: PropTypes.func,
};

export default IconButton;
