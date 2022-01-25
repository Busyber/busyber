import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../../../button';
import Text from '../../../text';
import Icon from '../../../icon'
import { ExclamationIcon } from '@heroicons/react/outline';

const ConfirmButton = styled(Button)`
:focus{
    background-color: #C53030;
    box-shadow: 0 0 0 3px rgba(197, 48, 48, 0.5);;
    border-color: #c53030;
    outline: 0;
}
`
const Simple = ({confirmTestId, grayFooter, closeDialog, onCancel, onConfirm, confirmText, cancelText, title, text, children }) => {


    return (
        <div>
            {children ?
                children
                :
                <>
                    <div className={`flex pt-0 md:pt-6 px-6 md:px-0 flex-col items-center md:flex-row md:justify-start  `}>

                        <div>
                            <Icon tailwind={`m-6 md:mt-0 bg-red-200 p-3 md:p-2 md:w-10 md:h-10
                     w-16 h-16 text-red-600 p2`}
                                round={true}
                                src={<ExclamationIcon />} />

                        </div>
                        <div className={` md:mt-3 md:mr-4`}>
                            <Text type='heading' tailwind='text-center md:text-left'>{title}</Text>

                            <Text tailwind='mt-2 text-center md:text-left'>{text}</Text>
                        </div>
                    </div>

                </>
            }
            <div className={`mt-4 float-bottom flex px-6 flex-col md:flex-row-reverse py-0 rounded-b-lg
             ${grayFooter && 'bg-gray-100'}
            `}>
                <ConfirmButton 
                testid={confirmTestId}
                tailwind={`text-white bg-red-600 my-2 md:m-2 md:mr-0 focus:border-red-700
                hover:bg-red-500 focus:outline-none`}
id='confirm'
                    onClick={onConfirm}
                    variant='secondary'
                    size='small'
                    color
                    hover
                    bg
                    focus
                >
                    {confirmText}

                </ConfirmButton>
                <Button
                id='cancel'
                    tailwind={`my-2 mb-4 md:m-2 md:mb-2  `}
                    onClick={() => {
                        closeDialog();
                        if (typeof onCancel !== 'undefined') { onCancel(); }
                    }}
                    variant='outline'
                    size='small'>
                    {cancelText}
                </Button>
            </div>
        </div>
    );
};

Simple.propTypes = {

};

export default Simple;
