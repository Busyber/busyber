import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../../text';
import Card from '../../../card';

const Item = ({title,value}) => {
    return (
        <Card tailwind='p-4 justify-center flex flex-col'>
            
            <Text type='text-small'>{title}</Text>
            <Text type='heading-small'>{value}</Text>

            
        </Card>
    );
};

Item.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string,
};

export default Item;
