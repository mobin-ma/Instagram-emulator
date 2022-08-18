import React from 'react'
import MessageLeft from './MessageLeft'
import MessageRight from './MessageRight'

const Messages = () => {
  return (
    <div className='messages__container mt-5'>
        <div className="row">
            <div className="col-sm-12 col-md-4 mt-4 p-0 border border-gray rounded-start h-85vh">
                <MessageLeft />
            </div>
            <div className="col-sm-12 col-md-8 mt-4 p-0 border border-gray rounded-end h-85vh">
                <MessageRight />
            </div>
        </div>
    </div>
  )
}

export default Messages