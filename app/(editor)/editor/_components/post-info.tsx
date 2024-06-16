import { ArrowRightIcon } from '@radix-ui/react-icons'
import PostDetail from './post-detail'
import PostComment from './post-comment'

export default function PostInfo() {
  return (
    <div className='flex flex-col gap-4 w-2/6 border border-l-black p-4'>
        <ArrowRightIcon width='22' height='22' className='cursor-pointer'/>
        <PostDetail />
        <PostComment />
      </div>
  )
}
