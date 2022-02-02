import React from 'react';
import { CSVLink } from 'react-csv';
import Button from '../button';
import PropTypes from 'prop-types';

const CSVConverter = ({data, headers, filename, loadingTestid,testid, className, tailwind, size, variant, onClick, iconLeft, iconRight, children, color,
  hover, bg, focus, padding, textSize, rounded, loading, loadingId, enabled, png, tour}) => {
    
  return( <>
  <Button
    loadingTestid= {loadingTestid}
    testid={testid}
    tailwind={tailwind}
    size={size}
    variant={variant}
    onClick={onClick}
    color={color}
    className={className}
    iconLeft={iconLeft}
    iconRight={iconRight}
    hover={hover}
    bg={bg}
    focus={focus}
    padding={padding}
    textSize={textSize}
    rounded={rounded}
    loading={loading}
    loadingId={loadingId}
    enabled={enabled}
    png={png}
    tour={tour}
  >
      <CSVLink 
            data={data}
            headers={headers}
            filename={filename}
          >
            {children}
      </CSVLink>
  </Button>
     
  </>)
};

export default CSVConverter;

CSVConverter.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  headers: PropTypes.arrayOf(PropTypes.exact({
    label: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
  })),

  filename: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}
