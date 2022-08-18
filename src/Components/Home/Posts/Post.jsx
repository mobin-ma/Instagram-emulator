import React, { useEffect, useState } from "react";
import { BookmarkIcon, ChatIcon, DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon } from "@heroicons/react/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";
import "./Posts.css";
import Comment from "./Comment";

const Post = ({ userName, userImage, image, caption, city }) => {

  const [like, setLike] = useState(false);
  const [numLike, setNumLike] = useState('');
  const [comment, setComment] = useState('');
  const [addComment, setAddComment] = useState([]);

  const addCommentFun = (e) => {
    e.preventDefault()
    setComment('')
    const id = Math.random();
    if ( comment === '' ) {
      return null
    } else {
      setAddComment([...addComment, {comment: comment, id: id}])
    }
  }

  useEffect(() => {
    like ? setNumLike(1) : setNumLike(0);
  }, [like])

  return (
    <div className="d-flex flex-column align-item-center justify-content-between border border-gray mt-4 rounded-3">
      {/* post header */}
      <div className="d-flex align-items-center jastify-content-between p-2">
        <img className="post__userimage" src={userImage} alt="user" />
        <div className="flex-fill">
          <p className="post__name">{userName}</p>
          <span className="post__city">{city}</span>
        </div>
        <DotsHorizontalIcon className="post__icons-dot" />
      </div>

      {/* post image */}
      <div>
        <img className="post__image" src={image} alt="img" />
      </div>

      {/* post button */}
      <div className="d-flex align-items-center jastify-content-between p-2">
        <div className="flex-fill">
          {like === true ? <HeartIconSolid onClick={() => !like ? setLike(true) : setLike(false)} className="post__icons me-3 text-danger" />
            : <HeartIcon onClick={() => !like ? setLike(true) : setLike(false)} className="post__icons me-3" />}
          <ChatIcon className="post__icons me-3" />
          <PaperAirplaneIcon className="post__icons me-3 mb-1 rotate-45" />
        </div>
        <div>
          <BookmarkIcon className="post__icons" />
        </div>
      </div>

      {/* post footer */}
      <div className="p-2">
        {/* description */}
        <div className="px-1 text-1">
          <p className="text-1 fw-bold mb-1">{numLike} Likes</p>
          <span className="text-1 fw-bold me-2 mt-0">{userName}</span>
          {caption}
        </div>

        {/* comments */}
        <div className="p-1 my-2 comment overflow-auto" id="comment">
          {
            addComment.map((comment, i) => (
              <Comment comment={comment} i={i} />
            ))
          }
        </div>

        {/* add comments */}
        <form className='d-flex align-items-center jastify-content-between p-1'>
          <EmojiHappyIcon className='post__icons' />
          <input className='flex-fill text-1 comment__input' type="text" placeholder='Add a comments ...' value={comment} onChange={(e) => setComment(e.target.value)}/>
          <button className='text-1 fw-bold comment__button' onClick={addCommentFun}>Post</button>
        </form>
      </div>
    </div>
  );
};

export default Post;
