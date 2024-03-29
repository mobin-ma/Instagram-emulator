import React from 'react'
import Post from './Post'
import post1 from '../../../asetss/post-1.jpg'
import post2 from '../../../asetss/post-2.jpg'
import post3 from '../../../asetss/post-3.jpg'
import post4 from '../../../asetss/post-4.jpg'
import post5 from '../../../asetss/post-5.jpg'

const Posts = () => {

    const posts = [
        {
            id: 1,
            userName: 'ail-na',
            userImage: 'https://www.citypng.com/public/uploads/preview/free-round-flat-male-portrait-avatar-user-icon-png-11639648873oplfof4loj.png',
            image: post1,
            caption: 'This is caption for the post...',
            city: 'Thran , iran'
        },
        {
            id: 2,
            userName: 'mobina-m',
            userImage: 'https://cdn-icons-png.flaticon.com/512/219/219961.png',
            image: post2,
            caption: 'This is caption for the post...',
            city: 'Hamedan , iran'
        },
        {
            id: 3,
            userName: 'mina-.s',
            userImage: 'https://cdn-icons-png.flaticon.com/512/219/219961.png',
            image: post3,
            caption: 'This is caption for the post...',
            city: 'Tabriz , iran'
        },
        {
            id: 4,
            userName: 'hasan-km',
            userImage: 'https://www.citypng.com/public/uploads/preview/free-round-flat-male-portrait-avatar-user-icon-png-11639648873oplfof4loj.png',
            image: post4,
            caption: 'This is caption for the post...',
            city: 'Esfehan , iran'
        },
        {
            id: 5,
            userName: 'neda--a',
            userImage: 'https://cdn-icons-png.flaticon.com/512/219/219961.png',
            image: post5,
            caption: 'This is caption for the post...',
            city: 'Mazandran , iran'
        },
        {
            id: 6,
            userName: 'mehdi--kh',
            userImage: 'https://www.citypng.com/public/uploads/preview/free-round-flat-male-portrait-avatar-user-icon-png-11639648873oplfof4loj.png',
            image: post1,
            caption: 'This is caption for the post...',
            city: 'Hamedan , iran'
        },
        {
            id: 7,
            userName: 'mohadeseh-ab',
            userImage: 'https://cdn-icons-png.flaticon.com/512/219/219961.png',
            image: post2,
            caption: 'This is caption for the post....',
            city: 'Bosher , iran'
        },
        {
            id: 8,
            userName: 'mohamad-mahdi',
            userImage: 'https://www.citypng.com/public/uploads/preview/free-round-flat-male-portrait-avatar-user-icon-png-11639648873oplfof4loj.png',
            image: post3,
            caption: 'This is caption for the post....',
            city: 'Thran , iran'
        },
        {
            id: 9,
            userName: 'niloo-md',
            userImage: 'https://cdn-icons-png.flaticon.com/512/219/219961.png',
            image: post4,
            caption: 'This is caption for the post....',
            city: 'Hamedan , iran'
        },
        {
            id: 10,
            userName: 'amir-js',
            userImage: 'https://www.citypng.com/public/uploads/preview/free-round-flat-male-portrait-avatar-user-icon-png-11639648873oplfof4loj.png',
            image: post5,
            caption: 'This is caption for the post....',
            city: 'Thran , iran'
        },
    ]

    return (
        <div>
            {
                posts.map((post) => (
                    <Post key={post.id} userName={post.userName} userImage={post.userImage} image={post.image} caption={post.caption} city={post.city} />
                ))
            }
        </div>
    )
}

export default Posts