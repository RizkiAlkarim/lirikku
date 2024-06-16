import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function PostComment() {
  return (
    <div className='flex flex-col gap-3'>
          <div><span className='font-bold'>Comment</span></div>
          <div className='flex flex-col gap-2'>
            <div className='px-4 py-3 bg-slate-200 flex flex-col gap-6 rounded border border-slate-400 text-sm'>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur. Volutpat posuere lorem justo mattis. Nunc leo id cras etiam tortor sit commodo.</p>
              </div>
              <div className='flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                  <Avatar>
                    <AvatarImage alt='user-avatar'></AvatarImage>
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <span>
                    username
                  </span>
                </div>
                <div>
                  <span className='text-gray-500'>
                  July, 22 2023 @ 10.35 am
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
