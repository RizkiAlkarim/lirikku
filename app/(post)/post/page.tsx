import PostComponent from "./_components/post/post"
import Detail from './_components/detail/detail'
import { auth } from "@/lib/auth"

export default async function Post() {
  return (
    <div className='flex justify-between w-full h-full px-16 py-16'>
        <PostComponent />
        <Detail />
    </div>
  )
}
