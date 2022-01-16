export const getCurrentMonth = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const date = new Date();
    return monthNames[date.getMonth()]
}

/**
 * format a date to string
 */
export const formatDate = ({ date, long = true }) => {
    if (date) {
        const newDate = new Date(date)
        return newDate.toLocaleDateString(undefined, { year: 'numeric', month: long ? 'long' : 'short', day: 'numeric' })
    } else {
        return null
    }
}


/**
 * converts a date into the javascript runtime standard format  
 * @param {} dateString 
 */
export const toStandardDate = (date) => {
    if (date) {
        const newDate = new Date(date)


        let dateParam

        if (date.getTimezoneOffset) {
            dateParam = newDate.getTime() - (date.getTimezoneOffset() * 60000)
        } else {
            dateParam = newDate.getTime()
        }

        const dateString = new Date(dateParam)
            .toISOString()
            .split("T")[0];

        return dateString
    }
    return ''
}