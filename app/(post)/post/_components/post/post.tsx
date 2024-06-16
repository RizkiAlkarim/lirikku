import React from 'react'
import PostHeader from './post-header'
import PostBody from './post-body'
import PostFooter from './post-footer'

export default function PostComponent() {
  return (
    <div className='w-3/6 h-full p-4 flex flex-col gap-12'>
        <PostHeader />
        <PostBody />
        <PostFooter />
    </div>
  )
}
