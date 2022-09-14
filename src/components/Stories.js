import React from 'react'
import Story from './Story';

function Stories(props) {

  return  (
    <div className="stories">
        {props.names.map((item, index) => <Story key={index} name={item}/>)}
    </div>
  )
}

export default Stories