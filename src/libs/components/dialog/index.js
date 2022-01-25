import React from 'react';
import PropTypes from 'prop-types';
import Content from './content';
import useFadeAnimParent from 'libs/hooks/useFadeAnim/useFadeAnimParent';
import CleanContent from './clean-content';

const Dialog = (props) => {
const {isShown, tailwindDialog} = props

    const {render,stopRender} = useFadeAnimParent(isShown);

    return (
        render &&
        (tailwindDialog ?
            <CleanContent
            {...props}
            stopRender={stopRender}
            />
            :
        <Content
            stopRender={stopRender}
            {... props}
            className={props.className}
        />
        )
    );
};

const tailwindProps = {
    itemsCenter: false
}

Dialog.defaultProps = {
    ...tailwindProps,
    isShown: false,
    variant: 'simple',
    shouldCloseOnOverlayClick: true,
    confirmText: "Confirm",
    cancelText: "Cancel",
    showDismiss: true,
    fullWidth: false,
    fullHeight: false,
    dismissVariant: 'round',
    tailwindDialog: false
}

Dialog.propTypes = {
    dismissVariant: PropTypes.oneOf(['round','dark']),
    variant: PropTypes.oneOf(['simple', 'simple-gray', 'action', 'double-action','absolute','absolute-basic','normal']),
    onCloseComplete: PropTypes.func,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
    confirmText: PropTypes.string,
    cancelText: PropTypes.string,
    text: PropTypes.string,
    title: PropTypes.string,


};

export default Dialog;
