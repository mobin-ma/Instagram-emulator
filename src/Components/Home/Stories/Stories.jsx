import React, { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker'
import Story from './Story';

const Stories = () => {

  const [stories, setStories] = useState([]);  

  useEffect(() => {
      const story = [...Array(20)].map((_, i) => ({
          avatar: faker.image.avatar(),
          userName: faker.internet.userName(),
          id: i
      }));
      setStories(story);
  }, [])
 
  return (
    <div className='d-flex gap-2 border border-gray p-2 rounded-3 overflow-scroll scroll'>
        {
          stories.map((story) => (
            <Story key={story.id} userName={story.userName} userImage={story.avatar} />
          ))
        }
    </div>
  )
}

export default Stories