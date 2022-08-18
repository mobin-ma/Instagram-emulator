import React, { useState } from 'react'
import { HeartIcon } from '@heroicons/react/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/solid';

const Comment = ({ comment, i }) => {

    const [commentLike, setCommentLike] = useState(undefined);

    return (
        <div key={comment.id} className="d-flex my-1 align-items-center">
            <div className="flex-fill d-flex align-items-center gap-2">
                <p className="mb-0 fw-bold text-1">mobin--ma</p>
                <span className="text-1">{comment.comment}</span>
            </div>
            {
                commentLike === true ?
                    <HeartIconSolid onClick={() => !commentLike ? setCommentLike(true) : setCommentLike(false)} className="comment__icons me-3 text-danger" /> :
                    <HeartIcon onClick={() => !commentLike ? setCommentLike(true) : setCommentLike(false)} className="comment__icons me-3" />
            }
        </div>
    )
}

export default Comment