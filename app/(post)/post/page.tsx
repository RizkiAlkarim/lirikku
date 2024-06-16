import PostComponent from "./_components/post/post"
import Detail from './_components/detail/detail'

export default function Post() {
  return (
    <div className='flex justify-between w-full h-full px-16 py-16'>
        <PostComponent />
        <Detail />
    </div>
  )
}
