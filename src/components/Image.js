import React from 'react'
import '../App.css'
function Image({image}) {
  return (
    <div className='img-edit'>
        <img src={image} className="pic" alt="coder"/>
    </div>
  )
}

export default Image