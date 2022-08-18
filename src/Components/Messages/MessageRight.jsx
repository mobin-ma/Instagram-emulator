import React, { useState } from "react";
import { EmojiHappyIcon, HeartIcon, PhotographIcon } from "@heroicons/react/outline";

const MessageRight = () => {

  const [message, setMssage] = useState('');
  const [addMessage, setAddMessge] = useState([]);
  console.log(addMessage);
  const addMessageFun = (e) => {
    e.preventDefault()
    setMssage('')
    const id = Math.random();
    if (message === '') {
      return null
    } else {
      setAddMessge([...addMessage, { message: message, id: id }])
    }
  }

  return (
    <div className="d-flex flex-column h-100 pb-5 overflow-scroll scroll">
      {/* section up */}
      <div className="d-flex flex-column align-items-center gap-2 mt-5">
        <img className="user__img" src="https://www.citypng.com/public/uploads/preview/free-round-flat-male-portrait-avatar-user-icon-png-11639648873oplfof4loj.png" alt="useruser" />
        <p className="fs-4 fw-bold">ail-na</p>
        <button className="p-1 px-2 text-1 border text-secondary-1 border-gray rounded">
          Viwe page
        </button>
      </div>

      {/* section chat */}
      <div className="d-flex flex-column mt-4 mb-5">
        {/* section chat left */}
        <div className="d-flex flex-column align-items-start gap-2">
          <p className="bg-chat text-light ms-3 p-3 px-4 rounded-3 position-relative">
            <img
              className="profiles-img position-absolute user-chat"
              src="https://www.citypng.com/public/uploads/preview/free-round-flat-male-portrait-avatar-user-icon-png-11639648873oplfof4loj.png"
              alt="user"
            />
            hello
          </p>
          <p className="bg-chat text-light ms-3 p-3 px-4 rounded-3 position-relative">
            <img
              className="profiles-img position-absolute user-chat"
              src="https://www.citypng.com/public/uploads/preview/free-round-flat-male-portrait-avatar-user-icon-png-11639648873oplfof4loj.png"
              alt="user"
            />
            how are you?
          </p>
        </div>
        {/* section chat right */}
        <div className="d-flex flex-column align-items-end gap-2 pe-2">
          <span className="align-self-center text-secondary-1">10:00 AM</span>
          <p className="bg-primary text-light ms-3 p-3 px-4 rounded-3 position-relative">
            hello
          </p>
          <p className="bg-primary text-light ms-3 p-3 px-4 rounded-3 position-relative">
            i'm good thanks
          </p>
          <p className="bg-primary text-light ms-3 p-3 px-4 rounded-3 position-relative">
            how are you?
          </p>
          {
            addMessage.map((message) => (
              <p key={message.id} className="bg-primary text-light ms-3 p-3 px-4 rounded-3 position-relative">
                {message.message}
              </p>
            ))
          }
        </div>
      </div>
      {/* section input */}
      <div className="submit-message-container position-absolute bg-light p-sm-2 p-1">
        <div className="d-flex align-items-center justify-content-center w-sm-75 w-100 mx-auto border border-gray p-sm-2 rounded-5">
          <div className="flex-sm-fill">
            <EmojiHappyIcon className="header__icons" />
            <input className="comment__input" type="text" placeholder="Message..." value={message} onChange={(e) => setMssage(e.target.value)} />
          </div>
          <button className="border-0 me-4 text-1 fw-bold comment__button" onClick={addMessageFun}>Send</button>
          <PhotographIcon className="header__icons me-2" />
          <HeartIcon className="header__icons" />
        </div>
      </div>
    </div>
  );
};

export default MessageRight;
