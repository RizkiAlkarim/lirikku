import React from 'react'
import { Cross2Icon } from '@radix-ui/react-icons'

export default function DetailNote() {
  return (
    <div className='flex flex-col gap-2 p-4 bg-slate-200'>
        <div className='flex justify-between items-center font-bold'>
            <div>Note</div>
            <div className='cursor-pointer'>
            <Cross2Icon width='22' height='22'/>
            </div>
        </div>
        <div className='text-sm'>
            <p>You can give suggestion to the lyric translation by click on the line of lyric  that you want to give suggestion.</p>
            <p>The suggestion will be received by writer via chat.</p>
        </div>
    </div>
  )
}
