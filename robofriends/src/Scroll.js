import React from 'react';

const Scroll = (props) => {
    return (
      <div style={{overflowY: 'scroll', border: '4px solid grey', height: '750px'}}>
        {props.children}
      </div>  
    )
    };

export default Scroll;
