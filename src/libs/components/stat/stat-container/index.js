import React from 'react'
import PropTypes from 'prop-types'

function StatContainer({ children }) {
    return (
        <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {children}
        </dl>
    )
}

StatContainer.propTypes = {

}

export default StatContainer


