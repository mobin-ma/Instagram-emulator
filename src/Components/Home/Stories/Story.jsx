import React from 'react';
import './Story.css'

const Story = ({ userImage, userName }) => {
  return (
    <div className='story me-1 w-100 gap-1'>
        <img className='story__img' src={userImage} alt="user" />
        <p className='story__name truncate'>{userName}</p>
    </div>
  )
}

export default Story