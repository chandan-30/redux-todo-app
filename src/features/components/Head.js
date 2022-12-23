import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import '../styles/Head.css';

// Heading section component

function Head() {
  return (
    <div className='head-div' data-testid='Head-id'>
        <p style={{display:'inline-block'}}>TODAY</p>
        <KeyboardArrowDownIcon className='arrow'></KeyboardArrowDownIcon>
        <MoreHorizIcon className='dots'></MoreHorizIcon>
    </div>
  )
}

export default Head