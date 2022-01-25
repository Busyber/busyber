import React from 'react'
import PropTypes from 'prop-types'
import Loading from '../loading'
import ErrorAlert from '../alert/error'

/**
 * automatically controls showing of the error and loading and when querying data
 * from the server
 */
function ContentController({ testid, errorTestid, loadingTestid, data, loading, error, children, tailwind, className, loadingTailwind, fullLoading }) {

    return (
        <div data-testid={testid} className={`w-full h-full ${tailwind} ${className}`}>
            {
                loading ?
                    <div
                        data-testid={loadingTestid ? loadingTestid : 'content-controller-loading'}
                        className={'w-full h-full flex justify-center items-center ' + loadingTailwind}>
                        <Loading screen={fullLoading} />
                    </div>
                    :
                    <>
                        {error ?
                            <div
                                data-testid={errorTestid ? errorTestid : 'content-controller-error'}
                                className=' flex w-full h-full justify-center items-center'>
                                <ErrorAlert
                                    isShown={error}
                                />
                            </div>


                            :
                            (data && children)
                        }
                    </>
            }
        </div>

    )
}

ContentController.propTypes = {

}

export default ContentController


