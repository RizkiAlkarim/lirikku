import React from 'react'
import { HeartIcon, ChatBubbleIcon, BookmarkIcon, Share1Icon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'

export default function PostFooter() {
  return (
    <div className='flex w-full h-full border-t border-t-black py-4 justify-center items-center gap-12'>
                <Button variant='ghost'>
                    <HeartIcon width='24' height='24' className='mr-2'/>
                    100
                </Button>
                <Button variant='ghost'>
                    <ChatBubbleIcon width='24' height='24' className='mr-2'/>
                    10
                </Button>
                <Button variant='ghost'>
                    <BookmarkIcon width='24' height='24' className='mr-2'/>
                    Bookmark
                </Button>
                <Button variant='ghost'>
                    <Share1Icon width='24' height='24' className='mr-2'/>
                    Share
                </Button>
                
            </div>
  )
}
