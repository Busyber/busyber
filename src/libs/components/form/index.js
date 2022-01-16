import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, children, id,testid, action, method, preventDefault, tailwind, className }) => {

    const handleSubmit = (e) => {
        preventDefault && e.preventDefault()
        onSubmit && onSubmit()
    }

    return (
        <form
            className={`${tailwind} ${className}`}
            method={method}
            action={action}
            id={id}
            onSubmit={handleSubmit}
            data-testid={testid}>
            {children}
        </form>
    );
};


Form.defaultProps = {
    preventDefault: true
}

Form.propTypes = {
    action: PropTypes.string,
    method: PropTypes.string,
    onSubmit: PropTypes.func,
};

export default Form;
