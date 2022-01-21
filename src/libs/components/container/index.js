import React from 'react';
import PropTypes from 'prop-types';

const Container = ({tailwind,className,narrow,children,id}) => {
    return (
        <div 
      
        data-testid={id}
        className={`w-full px-6 py-6 ${narrow ? 'md:px-24 lg:px-48 xl:px-64' : 'md:px-6'}
         ${tailwind} ${className}`}>
            
            {children}

        </div>
    );
};

const tailwindProps = {

}

Container.defaultProps ={
    ...tailwindProps,
    narrow: false
}
Container.propTypes = {
};

export default Container;
