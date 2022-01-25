import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Icon from '../../../icon'
import { ReactComponent as CheckedIcon } from './checked.svg'
import Text from '../../../text'
import Button from '../../../button'

const Action = ({confirmTestId, closeDialog, onCancel, confirmText, title, onConfirm, text, children,
    doubleAction, cancelText, }) => {

    return (
        <div className='flex items-center flex-col p-6'>
            {children ?
                children
                :
                <>
                    <Icon
                        tailwind='h-16 w-16 mb-4 bg-green-200 text-green-900'
                        src={<CheckedIcon />} />

                    <Text type='heading' tailwind='text-center mb-2'>{title}</Text>
                    <Text tailwind='text-center mb-2 md:mb-4'>{text}</Text>
                </>
            }

            <div className={`flex mt-4 w-full flex-col md:flex-row-reverse`}>

                <Button tailwind={`flex md:ml-2 w-full flex-1 mb-2 md:mb-0`}
                    size='default'
                    testid={confirmTestId}
                    onClick={onConfirm}
                >{confirmText}
                </Button>

                {doubleAction &&
                    <Button tailwind='flex-1 md:mr-2'
                        id='cancel'
                        variant='outline'
                        size='default'
                        onClick={() => {
                            closeDialog();
                            if (typeof onCancel !== 'undefined') { onCancel() }
                        }}
                    >{cancelText}
                    </Button>
                }

            </div>
        </div>
    );
};

Action.propTypes = {

};

export default Action;
