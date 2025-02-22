import React from 'react'
import MyPicture from '../../assets/happy-me.png';

const ImageCard = () => {
  return (
    <div className='h-64 md:h-96 rounded-lg overflow-hidden'>
      <img src={MyPicture} alt="" className='h-full w-full' />
    </div>
  )
}

export default ImageCard