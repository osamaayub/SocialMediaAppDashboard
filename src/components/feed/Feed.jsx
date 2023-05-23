/* eslint-disable array-callback-return */
import React from 'react'
import Post from '../../components/post/Post';
import Share from '../../components/share/Share';
import './feed.css';
import { Posts } from '../../dummyData';
const Feed = () => {
  return (
      <div className='feed'>
      <div className='feedWrapper'>
        <Share />
        {Posts.map((p) => {
          // eslint-disable-next-line no-undef
          <Post key={p.id} post={p} />
        })}
          </div>
    </div>
  )
}

export default Feed