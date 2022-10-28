import React from 'react'
import '../App.css'
function Description({about}) {

  return (
    <div className='description'>
        <h2>{about}</h2>
    </div>
  )
}

export default Description