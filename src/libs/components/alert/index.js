import React from 'react';
import PropTypes from 'prop-types';
import Content from './content'
import {useFadeAnimParent} from 'libs/hooks/useFadeAnim';

const Alert = props => {
    const { isShown } = props
 
    const { render, stopRender } = useFadeAnimParent(isShown);

    return (
        render &&
        <Content
            
            stopRender={stopRender}
            {...props}
            className={props.className}
        />
    );
};

Alert.defaultProps = {
    variant: 'warning',
    actions: false,
    isShown: false,
    showDismiss: false,
}


Alert.propTypes = {
    variant: PropTypes.oneOf(['warning', 'error', 'success', 'info']),
    link: PropTypes.shape({ title: PropTypes.string, url: PropTypes.string }),
    title: PropTypes.string,
    content: PropTypes.string,
    onPositiveClick: PropTypes.func,
    onNegativeClick: PropTypes.func,
    positiveText: PropTypes.string,
    negativeText: PropTypes.string,
    onCloseComplete: PropTypes.func,
};

export default Alert;
