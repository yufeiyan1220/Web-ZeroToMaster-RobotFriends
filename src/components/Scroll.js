import React from 'react';

function Scroll(props) {
  return <div style={{overflowY: 'scroll', border : '5px solid black', height: '600px'}}>
    {props.children};
  </div>;
}

export default Scroll;
