import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

function Badge({ children, tailwind, className, padding, textTailwind, color }) {
    const [stype, setStype] = useState()

    useEffect(() => {
        let style = `bg-${color}-100 text-${color}-800`

        setStype(style)
    }, [children])

    return (
        <div className={'flex items-center justify-center' + ' ' + tailwind + ' ' + className}>
            <p className={`${!padding && 'px-2'} inline-flex text-xs leading-5 font-semibold rounded-full ` + stype + ' ' + textTailwind}>
                {children}
            </p>
        </div>
    )
}

export default Badge


