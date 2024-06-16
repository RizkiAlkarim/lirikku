import Link from 'next/link'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

export default function PostHeader() {
  return (
    <div className='flex justify-between items-center text-sm'>
        <div>
            <Link href="/user/[slug]?slug=1"  className='flex items-center gap-4'>
                <Avatar>
                    <AvatarImage src='' alt='user-avatar' />
                    <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <p>username</p>
            </Link>
        </div>
        <div>
            <p>Monday, 19/06/2023</p>
        </div>
    </div>
  )
}
