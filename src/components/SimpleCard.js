import React from 'react'
import Title from './Title'
import Description from './Description'
import Image from './Image'
import '../App.css'

function SimpleCard() {
  return (
    <div className='flex'>
        <Image image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmJrSTnEiOVzEg9pkfr3dFz4s166_XAE8XFQ&usqp=CAU" />
        <div className='sub'>
            <Title header="My Name is Rabbi K. Dumgyan" />
            <Description about="I'm a junior software developer and UI/UX Designer" />
        </div>
    </div>
  )
}

export default SimpleCard