import { ArrowLeftIcon, LockClosedIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'

function Navbar() {
  return (
    <div className='px-16 py-6 border-b border-black'>
        <div className='flex justify-between items-center'>
            <div className='cursor-pointer'>
                <ArrowLeftIcon width='22' height='22'/>
            </div>
            <div className='flex gap-2'>
                <Button variant='ghost' className='gap-1 text-gray-500'>
                    <LockClosedIcon width='22' height='22' color='gray'/>
                    Private
                </Button>
                <Button variant='ghost'className='text-gray-500'>
                    Discard
                </Button>
                <Button>Save</Button>
            </div>
        </div>
    </div>
  )
}

export default Navbar