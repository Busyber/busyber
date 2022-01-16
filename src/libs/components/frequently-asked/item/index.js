import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Text from 'libs/components/text'

const Item = ({ index, title, content }) => {
    const [open, setOpen] = useState(false)

    return (
        <div className="mt-6 border-t border-gray-200 pt-6">
            <div>
                <dt className="text-lg leading-7">
                    <button
                        onClick={() => setOpen(!open)}
                        className="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none focus:text-gray-900">
                        <span className="font-medium text-gray-900">
                            {title}
                        </span>
                        <span className="ml-6 h-7 flex items-center">
                            <svg className={`${open ? '-rotate-180' : 'rotate-0'} h-6 w-6 transform`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </span>
                    </button>
                </dt>
                {open &&
                    <dd className="mt-2 pr-12">
                        <p className="text-base leading-6 text-gray-500">
                            {content}
                        </p>
                    </dd>
                }
            </div>
        </div>
    );
};

Item.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,

};

export default Item;
