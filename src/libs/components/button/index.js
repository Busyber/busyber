import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit'


const Button = ({ loadingTestid,testid, className, tailwind, size, variant, onClick, iconLeft, iconRight, children, color,
    hover, bg, focus, padding, textSize, rounded, typeSubmit, loading, loadingId, enabled, png, tour }) => {
    let iconWrapper = ``
    let variantStyle;
    let sizeStyle;
    let spinnerColor = 'steelBlue'

    const extraSmallSize = ` ${!padding && 'py-1 px-4'}  ${!textSize && 'text-xs'}`
    const smallSize = ` ${!padding && 'py-2 px-4'}  ${!textSize && 'text-sm'}`
    const mediumSize = ` ${!padding && 'py-3 px-8'} ${!textSize && 'text-base'}`
    const largeSize = ` ${!padding && 'py-4 px-10'} ${!textSize && 'text-lg'}`

    const focusStyle = ` ${!focus && 'focus:outline-none focus:border-blue-300 focus:shadow-outline'}`
    const shadowStyle = `shadow-sm`

    const primaryVariant = `${shadowStyle} ${focusStyle} ${!color && 'text-white'} ${!bg && 'bg-indigo-700'} 
    ${!hover && enabled && 'hover:bg-indigo-600'}`

    const secondaryVariant = `${shadowStyle} ${focusStyle} ${!color && 'text-indigo-700'}   ${!bg && 'bg-indigo-100'} 
    ${!hover && enabled && 'hover:bg-indigo-200 text-indigo-600'}`

    const darkVariant = `${shadowStyle}  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 ${!color && 'text-white'}  ${!bg && 'bg-gray-800'} 
    ${!hover && enabled && 'hover:text-gray-100 hover:bg-gray-900'}`

    const outlineVariant = `${shadowStyle} ${focusStyle} ${!bg && 'bg-white'} ${!color && 'text-gray-700'} border border-gray-300 
    ${!hover && enabled && 'hover:bg-gray-50 '}`

    const textVariant = ` ${!focus && 'focus:outline-none'} ${!bg && 'bg-transparent'}
     ${!color && 'text-gray-700'} ${!hover && enabled && 'hover:text-gray-900'}`

    let iconMargin = 0

    switch (size) {
        case 'extra-small':
            iconWrapper = iconWrapper.concat(' h-4 w-4 ')
            sizeStyle = extraSmallSize
            iconMargin = 2
            break
        case 'small':
            iconWrapper = iconWrapper.concat(' h-4 w-4 ')
            iconMargin = 2

            sizeStyle = smallSize
            break
        case 'large':
            iconWrapper = iconWrapper.concat(' h-6 w-6 ')
            iconMargin = 3

            sizeStyle = largeSize
            break
        default:
            iconWrapper = iconWrapper.concat(' h-6 w-6 ')
            iconMargin = 3

            sizeStyle = mediumSize
            break

    }

    if (iconLeft) {
        iconWrapper = iconWrapper.concat(iconWrapper, ` mr-${iconMargin} `)
    } else {
        iconWrapper = iconWrapper.concat(iconWrapper, ' mr-0')
    }
    if (iconRight) {
        iconWrapper = iconWrapper.concat(iconWrapper, ` ml-${iconMargin} `)
    } else {
        iconWrapper = iconWrapper.concat(iconWrapper, ' ml-0')
    }

    switch (variant) {
        case 'secondary':
            variantStyle = secondaryVariant
            break
        case 'outline':
            variantStyle = outlineVariant
            break
        case 'dark':
            variantStyle = darkVariant
            break
        case 'text':
            variantStyle = textVariant
            break
        default:
            variantStyle = primaryVariant
            spinnerColor = 'aqua'
            break
    }

    const styles = ` normal-case text-center border-transparent 
            ${enabled ? 'cursor-pointer' : 'cursor-default'} justify-center transition duration-150 items-center flex  
              ${!rounded && 'rounded-md'} leading-6 font-medium 
             ${variantStyle} ${sizeStyle} ${tailwind} ${className}`

    const button = () => <button
        data-testid={testid}
        tour={tour}
        type='button'
        className={styles}
        onClick={(e) => {
            if (enabled && onClick) {
                e.stopPropagation()
                onClick(e)
            }
        }}>
        {loading ?
            <div id={loadingId} data-testid={loadingTestid}>

                <Spinner name="pulse" color={spinnerColor} />

            </div>
            :
            <div className='flex items-center'>
                {iconLeft &&
                    <div className={iconWrapper}>
                        {png ?
                            <img src={iconLeft} />
                            :
                            iconLeft}
                    </div>
                }

                {children}

                {iconRight &&
                    <div className={iconWrapper}>
                        {png ?
                            <img src={iconRight} />
                            :
                            iconRight}
                    </div>
                }
            </div>
        }
    </button>

    return (
        typeSubmit ?
            loading ?
                button()
                :
                <input
                    data-testid={testid}
                    tour={tour}
                    value={children}
                    type='submit'
                    name="submit"
                    className={styles}
                />

            :
            button()

    );
};

const tailwindProps = {
    color: false,
    hover: false,
    bg: false,
    focus: false,
    textSize: false,
    padding: false,
    rounded: false,
}

Button.defaultProps = {
    ...tailwindProps,
    enabled: true,
    size: 'default',
    variant: 'primary',
    typeSubmit: false,
    loading: false,
    loadingId: 'button-loading'
};

Button.propTypes = {
    id: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(['large', 'default', 'small', 'extra-small']),
    variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'dark', 'text']),
    iconLeft: PropTypes.object,
    iconRight: PropTypes.object,
    id: PropTypes.string,
};;

export default Button;

