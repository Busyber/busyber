import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';



const TextInput = ({ testid, pattern, type, placeholder, className, tailwind, padding, focus, variant, element,
    value, onChange, disabled, id, dir, name, step, onFocus, onBlur, max, min, intl, aff, required }) => {

    const lightVariant = ` ${!focus && 'focus:border-blue-300 focus:shadow-outline bg-white'} 
    border border-gray-300 shadow-sm`

    const darkVariant = `bg-gray-700 text-gray-100 shadow-inner`

    let variantStyle

    switch (variant) {
        case 'light':
            variantStyle = lightVariant
            break
        case 'dark':
            variantStyle = darkVariant
            break
    }

    const style = `leading-6 text-sm ${!padding && 'px-3 py-1'}  rounded 
          outline-none transition duration-150 ${variantStyle} ${tailwind} ${className}`

    const valueProps = {
        value: value
    }
    if (typeof valueProps === 'undefined') { valueProps = null }

    const validate = (type, { target }) => {
        if (type === 'email') {
            if (!target.value.includes("@")) {
                target.setCustomValidity(aff ? intl.formatMessage({ id: "alert.validity.email" }) : "Your email must be valid. Please include @ in your email address!");
            } else if (target.value.includes("@") && target.value.substring(target.value.indexOf("@") + 1).length === 0) {
                target.setCustomValidity(aff ? intl.formatMessage({ id: "alert.validity.email2" }) : "Invalid email address! e.g. example@gmail.com");
            } else {
                target.setCustomValidity("");
            }
        } else {
            target.setCustomValidity("");
        }
    }

    const onChangeAndValidate = (type, e) => {
        onChange(e.target.value);
        validate(type, e);
    }

    return (

        element === 'text-area' ?
            <textarea
                required={required}
                id={id}
                dir={dir}
                data-testid={testid}
                disabled={disabled}
                onClick={(e) => e.stopPropagation()}
                pattern={pattern}
                name={name}
                onFocus={onFocus}
                onBlur={onBlur}
                className={style}
                type={type}
                step={step}
                max={max}
                min={min}
                {...valueProps}
                onChange={(e) => {
                    (typeof onChange !== 'undefined') && onChange(e.target.value)
                }
                }
                placeholder={placeholder} />
            :
            <input
                required={required}
                id={id}
                dir={dir}
                data-testid={testid}
                onFocus={onFocus}
                onBlur={onBlur}
                onClick={(e) => e.stopPropagation()}
                pattern={pattern}
                step={step}
                name={name}
                max={max}
                min={min}
                disabled={disabled}
                {...valueProps}
                onChange={(e) => {
                    (typeof onChange !== 'undefined') && onChangeAndValidate(type, e)
                    // onChange(e.target.value)
                }
                }
                className={style}
                type={type}
                onInvalid={(e) => validate(type, e)}
                placeholder={placeholder} />

    )

};

const tailwindProps = {
    padding: false,
    borderColor: false,
    focus: false,

}

TextInput.defaultProps = {
    ...tailwindProps,
    variant: 'light',
    element: 'input',
    disabled: false
}

export const proptypes = {
    element: PropTypes.oneOf(['input', 'text-area']),
    variant: PropTypes.oneOf(['light', 'dark']),
    placeholder: PropTypes.string,
    type: PropTypes.string,
    step: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    pattern: PropTypes.string,
};

TextInput.propTypes = proptypes;

export default TextInput;
