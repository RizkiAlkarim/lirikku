import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
// import GenreForm from './genre-form'
import InfoForm from './info-form'

export default function PostDetail() {

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex justify-between'>
        <span className='font-bold'>Post Detail</span>
      </div>
      <InfoForm />
    </div>
  )
}
