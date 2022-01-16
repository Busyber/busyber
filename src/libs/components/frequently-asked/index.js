import React from 'react';
import Text from '../text';
import Item from './item';
import PropTypes from 'prop-types'



const FrequentlyAsked = ({ items, tailwind, className }) => {

    return (
        <div className={`${tailwind} ${className}`}>
            <div className="max-w-screen-xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-center text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
                        Frequently asked questions
                    </h2>
                    <dl>

                        {
                            items.map((value, index) => {
                                return <Item
                                    key={index}
                                    index={index}
                                    {...value}
                                />
                            })

                        }


                    </dl>
                </div>
            </div>
        </div>

    );
};

FrequentlyAsked.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,

    })).isRequired
}

export default FrequentlyAsked;
